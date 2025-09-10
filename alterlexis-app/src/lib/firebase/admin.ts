
'use server';

import * as admin from 'firebase-admin';
import { makeUserAdmin } from '../makeAdmin';

const initializeFirebaseAdmin = () => {
  if (admin.apps.length > 0) {
    return;
  }

  try {
    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
      throw new Error("Firebase Admin SDK environment variables are not set. Please check your deployment configuration.");
    }
    
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });

    //  makeUserAdmin(process.env.ADMIN_UID!)
    console.log("Firebase Admin SDK initialized successfully from environment variables.");
  } catch (error) {
    const err = error as Error;
    console.error("Error initializing Firebase Admin SDK:", err.message);
    
    throw new Error(`Failed to initialize Firebase Admin SDK. Please check server logs and ensure your environment variables are correctly configured. Details: ${err.message}`);
  }
};

initializeFirebaseAdmin();

export async function getFirebaseAuth() {
  return admin.auth();
}

export async function getFirestore() {
  return admin.firestore();
}

export async function verifySessionCookie(sessionCookie: string) {
  if (!sessionCookie) {
    return null;
  }
  try {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
    return decodedClaims;
  } catch {
    return null;
  }
}
