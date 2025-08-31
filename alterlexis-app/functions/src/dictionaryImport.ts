import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Storage } from '@google-cloud/storage';

const FIRESTORE_BATCH_SIZE = 499; // Firestore allows up to 500 operations per batch

// admin.initializeApp() is now called in index.ts
// db and storage instances will be retrieved inside the function

interface WordEntry {
  definition_en: string;
  difficulty: string;
  points: number;
  translationLengths: { [key: string]: number };
  translations: { 
    [key: string]: {
      translation: string;
      definition: string;
    }
  };
}

interface DictionaryFile {
  [word: string]: WordEntry;
}

export const importDictionaryOnUpload = functions
  .runWith({ memory: '1GB', timeoutSeconds: 300 }) // Keep 1GB for initial file parsing, batches handle Firestore writes
  .storage.object().onFinalize(async (object) => {
  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name;    // File path in the bucket.
  const contentType = object.contentType; // File content type.

  // Initialize db and storage here, after admin.initializeApp() in index.ts has run.
  const db = admin.firestore();
  const storage = new Storage();

  // Exit if file path is missing (e.g., a directory being implicitly created).
  if (!filePath) {
    return functions.logger.info("File path is missing, ignoring.");
  }

  // Exit if the file is not a JSON file or not the expected dictionary file.
  if (!contentType || !contentType.startsWith('application/json') || !filePath.includes('dictionaries/dictionary.json')) {
    return functions.logger.info(`Not a dictionary JSON file or not in the 'dictionaries/' path: ${filePath}, type: ${contentType}`);
  }

  const bucket = storage.bucket(fileBucket);
  const file = bucket.file(filePath);

  try {
    functions.logger.info(`Starting import for file: ${filePath}`);
    const [contents] = await file.download();
    const dictionary: DictionaryFile = JSON.parse(contents.toString());

    const wordsToImport: { wordKey: string; wordData: WordEntry }[] = [];
    for (const wordKey in dictionary) {
      if (Object.prototype.hasOwnProperty.call(dictionary, wordKey)) {
        if (wordKey.trim() === '') {
          functions.logger.warn(`Skipping document creation for an empty wordKey in dictionary file: ${filePath}`);
          continue;
        }
        wordsToImport.push({ wordKey, wordData: dictionary[wordKey] });
      }
    }

    let totalWordsProcessed = 0;
    let successfulBatches = 0;
    let failedBatches = 0;

    for (let i = 0; i < wordsToImport.length; i += FIRESTORE_BATCH_SIZE) {
      const batchNumber = Math.floor(i / FIRESTORE_BATCH_SIZE) + 1;
      const batch = db.batch();
      const chunk = wordsToImport.slice(i, i + FIRESTORE_BATCH_SIZE);
      
      functions.logger.info(`Processing batch ${batchNumber} with ${chunk.length} words.`);

      chunk.forEach(({ wordKey, wordData }) => {
        const docRef = db.collection('wordBank').doc(wordKey);
        batch.set(docRef, wordData, { merge: true });
      });

      try {
        await batch.commit();
        totalWordsProcessed += chunk.length;
        successfulBatches++;
        functions.logger.info(`Successfully committed batch ${batchNumber}. Total words processed: ${totalWordsProcessed}`);
      } catch (batchError) {
        failedBatches++;
        functions.logger.error(`Failed to commit batch ${batchNumber}:`, batchError);
      }
    }
    
    functions.logger.info(`Import process completed for ${filePath}. Total words successfully processed: ${totalWordsProcessed}, Successful batches: ${successfulBatches}, Failed batches: ${failedBatches}`);
    
    // Optionally, delete the uploaded file after successful import
    // await file.delete();
    // functions.logger.info(`Deleted uploaded file: ${filePath}`);

  } catch (error) {
    functions.logger.error(`Failed to import dictionary from ${filePath}:`, error);
  }
  return null;
});
