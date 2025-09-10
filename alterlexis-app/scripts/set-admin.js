
/**
 * @fileoverview Script Node.js to grant admin privileges to a user.
 * This script uses Firebase Admin SDK to set a custom claim `isAdmin: true`
 * on a user's account, granting them access to the admin panel.
 *
 * @usage
 * 1. Download your service account key file from the Firebase console.
 *    (Project settings > Service accounts > Generate new private key)
 * 2. Save it as `serviceAccountKey.json` in the root of your project.
 * 3. Run the script with the user's UID as an argument:
 *    `node scripts/set-admin.js <user_uid_to_promote>`
 */

const admin = require('firebase-admin');
const path = require('path');

// Construct the path to the service account key file from the project root
const serviceAccountPath = path.resolve(__dirname, '..', 'serviceAccountKey.json');

try {
  const serviceAccount = require(serviceAccountPath);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('Firebase Admin SDK initialized successfully using local key file.');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', (error).message);
  console.error(`Please ensure you have a valid 'serviceAccountKey.json' file at the following path: ${serviceAccountPath}`);
  process.exit(1);
}

// Get the UID from command-line arguments
const uid = process.argv[2];

if (!uid) {
  console.error('ERROR: User UID is required.');
  console.log('Usage: node scripts/set-admin.js <user_uid_to_promote>');
  process.exit(1);
}

console.log(`Attempting to set admin claim for user: ${uid}`);

// Set the custom claim { isAdmin: true } for the specified user
admin
  .auth()
  .setCustomUserClaims(uid, { isAdmin: true })
  .then(async () => {
    // Also update the isAdmin field in Firestore for consistency
    await admin.firestore().collection('users').doc(uid).update({ isAdmin: true });
    console.log(`✅ Success! User ${uid} has been granted admin privileges in Auth and Firestore.`);
    console.log('They may need to log out and log back in for the changes to take effect.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error setting custom user claims:', (error).message);
    if (error.code === 'auth/user-not-found') {
      console.error(`The user with UID "${uid}" was not found in Firebase Authentication.`);
    }
    process.exit(1);
  });
