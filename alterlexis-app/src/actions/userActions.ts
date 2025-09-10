'use server';

import { getFirestore, getFirebaseAuth } from '@/lib/firebase/admin';
import { COLLECTIONS } from '@/lib/constants';
import { User, Difficulty } from '@/types/types';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';

export async function getUserProfile(uid: string): Promise<User | null> {
  const db = await getFirestore();
  const userDoc = await db.collection(COLLECTIONS.USERS).doc(uid).get();
  if (userDoc.exists) {
    return userDoc.data() as User;
  }
  return null;
}

export async function createUserProfile(uid: string, email: string, displayName: string | null = null): Promise<User> {
  const db = await getFirestore();
  const newUser: User = {
    uid,
    email,
    displayName: displayName || email.split('@')[0],
    createdAt: Date.now(),
    premium_expires_at: null,
    isAdmin: false,
    preferences: { nativeLang: 'fr', targetLang: 'en', lastDifficulty: 'facile' },
    onboarding: { hasCompletedTour: false },
    stats: {
      totalScore: 0,
      wordsMastered: 0,
      gamesPlayed: 0,
      currentStreak: 0,
      successRate: 0,
      scores: { facile: 0, moyen: 0, difficile: 0, competitif: 0 },
      dailyMediumPlays: 3,
      lastPlayDate: "",
      uniqueLanguagesMastered: 0,
    },
    badges: [],
  };
  await db.collection(COLLECTIONS.USERS).doc(uid).set(newUser);
  return newUser;
}

export async function updateUserProfile(uid: string, data: Partial<Pick<User, 'displayName' | 'preferences'>>): Promise<void> {
  const db = await getFirestore();
  await db.collection(COLLECTIONS.USERS).doc(uid).update(data);
}

export async function updateUserOnboarding(hasCompletedTour: boolean): Promise<void> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value || '';
    const decodedClaims = await verifySessionCookie(sessionCookie);
    if (!decodedClaims) throw new Error('User not authenticated.');
    const uid = decodedClaims.uid;
    const db = await getFirestore();
    await db.collection(COLLECTIONS.USERS).doc(uid).update({ 'onboarding.hasCompletedTour': hasCompletedTour });
}

export async function deleteUserAccount(): Promise<{ success: boolean; message: string }> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value || '';
    const decodedClaims = await verifySessionCookie(sessionCookie);
    if (!decodedClaims) throw new Error('User not authenticated.');
    const uid = decodedClaims.uid;
    const db = await getFirestore();
    const auth = await getFirebaseAuth();
    try {
        await db.collection(COLLECTIONS.USERS).doc(uid).delete();
        await auth.deleteUser(uid);
        cookieStore.delete('session');
        return { success: true, message: 'Your account has been successfully deleted.' };
    } catch (error) {
        return { success: false, message: 'An error occurred.' };
    }
}

export async function getWordBanks(): Promise<any[]> {
    return [];
}
