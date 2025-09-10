'use server';

import { getFirestore } from '@/lib/firebase/admin';
import { COLLECTIONS } from '@/lib/constants';
import { User, Badge } from '@/types/types';
import { checkNewBadges } from '@/lib/badges';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';

export async function awardBadges(): Promise<Badge[]> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims) {
    throw new Error('User not authenticated.');
  }

  const uid = decodedClaims.uid;
  const db = await getFirestore();
  const userRef = db.collection(COLLECTIONS.USERS).doc(uid);

  try {
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      throw new Error('User not found.');
    }

    const user = userDoc.data() as User;
    const newBadges = checkNewBadges(user);

    if (newBadges.length > 0) {
      const updatedBadges = [...user.badges, ...newBadges];
      await userRef.update({ badges: updatedBadges });
    }

    return newBadges;
  } catch (error) {
    console.error('Error awarding badges:', error);
    throw new Error('Failed to award badges.');
  }
}
