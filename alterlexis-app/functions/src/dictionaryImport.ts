import { onObjectFinalized } from "firebase-functions/v2/storage";
import { setGlobalOptions } from "firebase-functions/v2";
import * as admin from "firebase-admin";
import { Storage } from "@google-cloud/storage";

setGlobalOptions({ memory: "1GiB", timeoutSeconds: 300 });

admin.initializeApp();

interface WordEntry {
  definition_en: string;
  difficulty: string;
  points: number;
  translationLengths: { [key: string]: number };
  translations: {
    [key: string]: {
      translation: string;
      definition: string;
    };
  };
}

interface DictionaryFile {
  [word: string]: WordEntry;
}

export const importDictionaryOnUpload = onObjectFinalized(
  { memory: "1GiB", timeoutSeconds: 300 },
  async (event) => {
    const fileBucket = event.data.bucket;
    const filePath = event.data.name;
    const contentType = event.data.contentType;

    const db = admin.firestore();
    const storage = new Storage();

    if (!filePath) {
      console.log("File path is missing, ignoring.");
      return;
    }

    if (
      !contentType ||
      !contentType.startsWith("application/json") ||
      !filePath.includes("dictionaries/dictionary.json")
    ) {
      console.log(
        `Not a dictionary JSON file or not in the 'dictionaries/' path: ${filePath}, type: ${contentType}`
      );
      return;
    }

    const bucket = storage.bucket(fileBucket);
    const file = bucket.file(filePath);

    try {
      console.log(`Starting import for file: ${filePath}`);
      const [contents] = await file.download();
      const dictionary: DictionaryFile = JSON.parse(contents.toString());

      const FIRESTORE_BATCH_SIZE = 499;
      const wordsToImport: { wordKey: string; wordData: WordEntry }[] = [];

      for (const wordKey in dictionary) {
        if (Object.prototype.hasOwnProperty.call(dictionary, wordKey)) {
          if (wordKey.trim() === "") {
            console.warn(
              `Skipping empty wordKey in dictionary file: ${filePath}`
            );
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

        console.log(`Processing batch ${batchNumber} with ${chunk.length} words.`);

        chunk.forEach(({ wordKey, wordData }) => {
          const docRef = db.collection("wordBank").doc(wordKey);
          batch.set(docRef, wordData, { merge: true });
        });

        try {
          await batch.commit();
          totalWordsProcessed += chunk.length;
          successfulBatches++;
          console.log(
            `Batch ${batchNumber} committed. Total processed: ${totalWordsProcessed}`
          );
        } catch (batchError) {
          failedBatches++;
          console.error(`Failed to commit batch ${batchNumber}:`, batchError);
        }
      }

      console.log(
        `Import completed for ${filePath}. Success: ${successfulBatches}, Failed: ${failedBatches}`
      );
    } catch (error) {
      console.error(`Failed to import dictionary from ${filePath}:`, error);
    }
  }
);
