"use server";

import { getFirestore, DocumentSnapshot } from "firebase-admin/firestore";
import { User, PremiumKey } from "@/types/types";
import { COLLECTIONS } from "@/lib/constants";
import { cookies } from "next/headers";
import { verifySessionCookie, getFirebaseAuth } from "@/lib/firebase/admin";

function serializeDoc<T>(doc: FirebaseFirestore.DocumentSnapshot): T {
  const data = doc.data();
  if (!data) return {} as T;
  return {
    id: doc.id,
    ...JSON.parse(JSON.stringify(data)), // converts Timestamps/Objects into plain JSON
  } as T;
}

export async function getAdminKpis(): Promise<{
  totalUsers: number;
  activePremiumSubscribers: number;
  keysUsed: number;
}> {
  const db = await getFirestore();
  const usersRef = db.collection(COLLECTIONS.USERS);
  const premiumKeysRef = db.collection(COLLECTIONS.PREMIUM_KEYS);
  const totalUsersSnapshot = await usersRef.get();
  const activePremiumSubscribersSnapshot = await usersRef
    .where("premium_expires_at", ">", Date.now())
    .get();
  const keysUsedSnapshot = await premiumKeysRef
    .where("isUsed", "==", true)
    .get();
  return {
    totalUsers: totalUsersSnapshot.size,
    activePremiumSubscribers: activePremiumSubscribersSnapshot.size,
    keysUsed: keysUsedSnapshot.size,
  };
}

export async function getUsers(
  startAfterDoc?: string
): Promise<{ users: User[]; lastVisibleId?: string }> {
  const db = await getFirestore();
  let query = db
    .collection(COLLECTIONS.USERS)
    .orderBy("createdAt", "desc")
    .limit(10);
  if (startAfterDoc) {
    const lastVisible = await db
      .collection(COLLECTIONS.USERS)
      .doc(startAfterDoc)
      .get();
    query = query.startAfter(lastVisible);
  }
  const snapshot = await query.get();

  // const users = snapshot.docs.map((doc) => doc.data() as User);

  const users = snapshot.docs.map((doc) => serializeDoc<User>(doc));
  const lastVisibleId = snapshot.docs[snapshot.docs.length - 1]?.id;
  return { users, lastVisibleId };
}



export async function updatePremiumStatus(uid: string, expiresAt: Date | null) {
  const db = await getFirestore();
  await db
    .collection(COLLECTIONS.USERS)
    .doc(uid)
    .update({ premium_expires_at: expiresAt ? expiresAt.getTime() : null });
}

export async function setAdminClaim(
  uid: string,
  isAdmin: boolean
): Promise<{ success: boolean; message: string }> {
  const auth = await getFirebaseAuth();
  const db = await getFirestore();
  await auth.setCustomUserClaims(uid, { admin: isAdmin });
  await db.collection(COLLECTIONS.USERS).doc(uid).update({ isAdmin });

  return { success: true, message: "User status updated." };
}

export async function getPremiumKeys(): Promise<PremiumKey[]> {
  const db = await getFirestore();
  const snapshot = await db
    .collection(COLLECTIONS.PREMIUM_KEYS)
    .orderBy("createdAt", "desc")
    .get();
  return snapshot.docs.map((doc) => serializeDoc<PremiumKey>(doc));
  // return snapshot.docs.map(doc => doc.data() as PremiumKey);
}

export async function generatePremiumKeys(
  numberOfKeys: number,
  durationDays: number
): Promise<string[]> {
  const db = await getFirestore();
  const batch = db.batch();
  const newKeys: string[] = [];
  for (let i = 0; i < numberOfKeys; i++) {
    const keyRef = db.collection(COLLECTIONS.PREMIUM_KEYS).doc();
    batch.set(keyRef, {
      id: keyRef.id,
      durationDays,
      createdAt: Date.now(),
      isUsed: false,
      usedByUid: null,
      usedAt: null,
    });
    newKeys.push(keyRef.id);
  }
  await batch.commit();
  return newKeys;
}

export async function getAdminErrorLogs(): Promise<any[]> {
  return [];
}
