const admin = require('firebase-admin');

// IMPORTANT: Path to your Firebase Admin SDK service account key
// Download this from your Firebase project settings
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function migrateWordBank() {
  console.log("Starting wordBank migration for translationLengths...");

  const wordBankRef = db.collection("wordBank");
  const snapshot = await wordBankRef.get();

  if (snapshot.empty) {
    console.log("wordBank collection is empty. Nothing to migrate.");
    return;
  }

  // Firestore allows a maximum of 500 operations in a single batch.
  // We'll process documents in chunks to stay within this limit.
  const batches = [];
  let currentBatch = db.batch();
  let operationCount = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    // Only update documents that have translations but are missing the translationLengths field
    if (data.translations && !data.translationLengths) {
      const translationLengths = {};
      for (const lang in data.translations) {
        if (Object.prototype.hasOwnProperty.call(data.translations, lang)) {
          const translation = data.translations[lang]?.translation;
          if (typeof translation === 'string') {
            translationLengths[lang] = translation.length;
          }
        }
      }
      
      currentBatch.update(doc.ref, { translationLengths });
      operationCount++;

      // If the current batch is full, push it to the array and start a new one.
      if (operationCount === 499) {
        batches.push(currentBatch);
        currentBatch = db.batch();
        operationCount = 0;
      }
    }
  });

  // Add the last batch if it has operations
  if (operationCount > 0) {
    batches.push(currentBatch);
  }

  if (batches.length === 0) {
    console.log("No documents needed migration.");
    return;
  }

  console.log(`Preparing to commit ${batches.length} batch(es)...`);

  try {
    await Promise.all(batches.map(batch => batch.commit()));
    console.log(`Successfully migrated documents!`);
  } catch (error) {
    console.error("Error committing migration batch:", error);
  }
}

migrateWordBank().then(() => {
  console.log("Migration script finished.");
}).catch(error => {
    console.error("Migration script failed:", error);
});
