const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function countWordBankWords() {
  console.log('Counting documents (words) in wordBank collection...');

  try {
    const wordBankRef = db.collection('wordBank');
    const snapshot = await wordBankRef.get();

    const totalWords = snapshot.size;

    console.log(`Total words (documents) in wordBank collection: ${totalWords}`);

  } catch (error) {
    console.error('Error counting words in wordBank:', error);
  } finally {
    process.exit(0);
  }
}

countWordBankWords();
