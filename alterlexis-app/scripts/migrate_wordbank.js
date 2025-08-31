// This script is intended to be run locally, not as a cloud function.
// It will connect to your Firestore database and update all documents in the 'wordBank' collection.
const admin = require('firebase-admin');

// IMPORTANT: You must download your Firebase Admin SDK service account key JSON file
// and place it at the root of your project, naming it 'serviceAccountKey.json'.
const serviceAccount = require('../serviceAccountKey.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("Firebase Admin SDK initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase Admin SDK. Make sure your 'serviceAccountKey.json' is in the root directory.", error);
  process.exit(1);
}


const db = admin.firestore();

async function migrateWordBank() {
  console.log("Starting wordBank migration to add 'translationLengths' field...");

  const wordBankRef = db.collection("wordBank");
  const snapshot = await wordBankRef.get();

  if (snapshot.empty) {
    console.log("wordBank collection is empty. Nothing to migrate.");
    return;
  }

  const batches = [];
  let currentBatch = db.batch();
  let operationCount = 0;
  let migratedCount = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.translations) {
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
      migratedCount++;

      if (operationCount >= 499) {
        batches.push(currentBatch);
        currentBatch = db.batch();
        operationCount = 0;
      }
    }
  });

  if (operationCount > 0) {
    batches.push(currentBatch);
  }

  if (batches.length === 0) {
    console.log("No documents needed migration.");
    return;
  }

  console.log(`Preparing to commit ${migratedCount} updates in ${batches.length} batch(es)...`);

  try {
    await Promise.all(batches.map(batch => batch.commit()));
    console.log(`✅ Successfully migrated ${migratedCount} documents! Your database is ready.`);
  } catch (error) {
    console.error("❌ Error committing migration batch:", error);
  }
}

migrateWordBank().then(() => {
  console.log("Migration script finished.");
}).catch(error => {
    console.error("Migration script failed:", error);
});
