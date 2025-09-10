'use server';

import { getFirestore } from '@/lib/firebase/admin';
import { COLLECTIONS } from '@/lib/constants';
import { User, Badge } from '@/types/types';
import { BADGES } from '@/lib/badges';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function redeemPremiumKey(key: string): Promise<{ success: boolean; message: string }> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims) {
    return { success: false, message: 'Utilisateur non authentifié.' };
  }

  const uid = decodedClaims.uid;
  const db = await getFirestore();
  const keyRef = db.collection(COLLECTIONS.PREMIUM_KEYS).doc(key);
  const userRef = db.collection(COLLECTIONS.USERS).doc(uid);

  try {
    const keyDoc = await keyRef.get();
    if (!keyDoc.exists || keyDoc.data()?.isUsed) {
      return { success: false, message: 'Clé invalide ou déjà utilisée.' };
    }

    const userDoc = await userRef.get();
    if (!userDoc.exists) {
        return { success: false, message: 'Profil utilisateur introuvable.' };
    }
    const userData = userDoc.data() as User;

    const durationDays = keyDoc.data()?.durationDays || 30;
    const now = new Date();
    const currentExpiry = userData.premium_expires_at && userData.premium_expires_at > now.getTime()
        ? new Date(userData.premium_expires_at)
        : now;
    const newExpiry = new Date(currentExpiry.getTime() + durationDays * 24 * 60 * 60 * 1000);

    // Prepare badge if it's not already awarded
    const goldenKeyBadge = { ...BADGES.GOLDEN_KEY_HOLDER, awardedAt: Date.now() };
    const hasBadge = userData.badges.some(badge => badge.id === goldenKeyBadge.id);

    // Firestore update transaction
    await db.runTransaction(async (transaction) => {
        transaction.update(userRef, { 
            premium_expires_at: newExpiry.getTime(),
            badges: hasBadge ? userData.badges : FieldValue.arrayUnion(goldenKeyBadge)
        });
        transaction.update(keyRef, { isUsed: true, usedByUid: uid, usedAt: Date.now() });
    });

    return { success: true, message: 'Clé activée avec succès ! Vous êtes maintenant un Gardien du Savoir.' };
  } catch (error) {
    console.error('Erreur lors de l\'activation de la clé premium:', error);
    return { success: false, message: 'Échec de l\'activation de la clé premium.' };
  }
}
