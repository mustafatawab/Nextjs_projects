import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { onSchedule } from "firebase-functions/v2/scheduler";

admin.initializeApp(); // Initialize Firebase app first

// Import the new dictionary import function
export { importDictionaryOnUpload } from "./dictionaryImport";

const db = admin.firestore(); // Now db is initialized after the app

// ✅ v2-compatible cron job
export const revokeExpiredPremiums = onSchedule(
  {
    schedule: "every day 01:00",
    timeZone: "Europe/Paris",
  },
  async () => {
    functions.logger.info("Checking for and revoking expired premium subscriptions.");

    const now = new Date();
    const usersRef = db.collection("users");

    const snapshot = await usersRef
      .where("premium_expires_at", "<=", now.getTime())
      .where("premium_expires_at", "!=", null)
      .get();

    if (snapshot.empty) {
      return functions.logger.info("No expired premium subscriptions to revoke.");
    }

    const batch = db.batch();
    snapshot.forEach((doc) => {
      functions.logger.info(`Revoking premium for user: ${doc.id}`);
      batch.update(doc.ref, { premium_expires_at: null });
    });

    await batch.commit();
    return functions.logger.info(`Revoked premium status for ${snapshot.size} users.`);
  }
);
