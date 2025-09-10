const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function initializeFirestore() {
  console.log('Starting Firestore initialization...');

  const collections = {
    users: {
      docId: '_placeholder_user',
      data: { 
        email: 'placeholder@example.com', 
        displayName: 'Placeholder User',
        createdAt: Date.now(),
        isAdmin: false,
      },
      subcollections: {
        masteredWords: {
          docId: '_placeholder_word',
          data: {
            wordId: 'placeholder_word_id',
            masteryLevel: 1,
            lastPracticed: Date.now(),
          }
        }
      }
    },
    wordBank: {
      docId: '_placeholder_bank',
      data: {
        language: 'en',
        difficulty: 'facile',
        words: [],
      }
    },
    premiumKeys: {
      docId: '_placeholder_key',
      data: {
        durationDays: 30,
        isUsed: false,
        createdAt: Date.now(),
      }
    },
    mail: {
      docId: '_placeholder_mail',
      data: {
        to: 'placeholder@example.com',
        message: {
          subject: 'Hello from Firebase!',
          text: 'This is the plaintext version of the message.',
          html: 'This is the <code>HTML</code> version of the message.',
        }
      }
    }
  };

  for (const [name, config] of Object.entries(collections)) {
    try {
      const docRef = db.collection(name).doc(config.docId);
      const doc = await docRef.get();

      if (doc.exists) {
        console.log(`Collection '${name}' already exists. Skipping.`);
      } else {
        await docRef.set(config.data);
        console.log(`✅ Collection '${name}' initialized successfully.`);
      }

      if (config.subcollections) {
        for (const [subName, subConfig] of Object.entries(config.subcollections)) {
          const subDocRef = docRef.collection(subName).doc(subConfig.docId);
          const subDoc = await subDocRef.get();
          if (subDoc.exists) {
            console.log(`   - Sub-collection '${subName}' already exists. Skipping.`);
          } else {
            await subDocRef.set(subConfig.data);
            console.log(`   - ✅ Sub-collection '${subName}' initialized successfully.`);
          }
        }
      }

    } catch (error) {
      console.error(`❌ Error initializing collection '${name}':`, error);
    }
  }

  console.log('Firestore initialization complete.');
  process.exit(0);
}

initializeFirestore();
