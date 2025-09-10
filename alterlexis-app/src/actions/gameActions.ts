'use server';

import { getFirestore, DocumentData } from 'firebase-admin/firestore';
import { Word, User, Locale, Difficulty } from '@/types/types';
import { COLLECTIONS } from '@/lib/constants';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

const LANGUAGE_MAP: { [key in Locale]?: string } = {
    fr: 'Français', es: 'Español', de: 'Deutsch', it: 'Italiano',
    pt: 'Português', ru: 'Русский', zh: '简体中文', ar: 'العربية'
};

interface GetGameWordsParams {
  targetLang: Locale;
  difficulty: string;
}

export async function getGameWords({ targetLang, difficulty }: GetGameWordsParams): Promise<Word[]> {
  const db = await getFirestore();
  let minLength = 0, maxLength = 0;
  switch (difficulty) {
    case 'facile': minLength = 1; maxLength = 3; break;
    case 'moyen': minLength = 4; maxLength = 6; break;
    case 'difficile': minLength = 7; maxLength = 12; break;
    case 'competitif': minLength = 13; maxLength = 100; break;
    default: return [];
  }

  try {
    let potentialWords: DocumentData[] = [];

    if (targetLang === 'en') {
      // English is a special case: filter by document ID length in memory
      console.log(`Using SAFE fallback for English, length [${minLength}-${maxLength}]`);
      const snapshot = await db.collection('wordBank').get();
      if (snapshot.empty) return [];
      
      potentialWords = snapshot.docs.filter(doc => {
        const len = doc.id.length;
        return len >= minLength && len <= maxLength;
      }).map(doc => ({ id: doc.id, ...doc.data() }));

    } else {
      // For all other languages, use the fast indexed query
      const langKey = LANGUAGE_MAP[targetLang];
      if (!langKey) throw new Error(`Invalid language key for: ${targetLang}`);
      
      console.log(`Using OPTIMIZED query for ${langKey}, length [${minLength}-${maxLength}]`);
      const lengthField = `translationLengths.${langKey}`;
      
      const snapshot = await db.collection('wordBank')
        .where(lengthField, '>=', minLength)
        .where(lengthField, '<=', maxLength)
        .limit(150)
        .get();
      
      if (!snapshot.empty) {
        potentialWords = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      }
    }

    if (potentialWords.length === 0) {
      console.warn(`No words found for lang '${targetLang}' with specified criteria.`);
      return [];
    }

    const shuffled = potentialWords.sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 10);

    return selectedWords.map((doc: DocumentData) => {
      const langKey = LANGUAGE_MAP[targetLang];
      return {
        wordId: doc.id,
        word: targetLang === 'en' ? doc.id : doc.translations[langKey!]?.translation || '',
        translation: doc.id,
        definition: targetLang === 'en' ? doc.definition_en : doc.translations[langKey!]?.definition || '',
        points: doc.points || 10,
      };
    });

  } catch (error) {
    console.error("CRITICAL ERROR in getGameWords:", error);
    return [];
  }
}

// ... (checkAndDecrementDailyPlays and updateUserStats are unchanged and correct)
export async function checkAndDecrementDailyPlays(): Promise<{ canPlay: boolean; remainingPlays: number }> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value || '';
    const decodedClaims = await verifySessionCookie(sessionCookie);
    if (!decodedClaims) throw new Error('User not authenticated.');
    const uid = decodedClaims.uid;
    const db = await getFirestore();
    const userRef = db.collection(COLLECTIONS.USERS).doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) throw new Error('User not found.');
    const user = userDoc.data() as User;
    const isPremium = user.premium_expires_at && user.premium_expires_at > Date.now();
    if (isPremium) return { canPlay: true, remainingPlays: Infinity };
    const today = new Date().toISOString().split('T')[0];
    let dailyMediumPlays = user.stats.dailyMediumPlays;
    if (user.stats.lastPlayDate !== today) {
        dailyMediumPlays = 3;
        await userRef.update({ 'stats.lastPlayDate': today, 'stats.dailyMediumPlays': 3 });
    }
    if (dailyMediumPlays > 0) {
        await userRef.update({ 'stats.dailyMediumPlays': FieldValue.increment(-1) });
        return { canPlay: true, remainingPlays: dailyMediumPlays - 1 };
    } else {
        return { canPlay: false, remainingPlays: 0 };
    }
}

export async function updateUserStats(params: { score: number; wordsMastered: number; difficulty: Difficulty; }) {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value || '';
    const decodedClaims = await verifySessionCookie(sessionCookie);
    if (!decodedClaims) return;
    const uid = decodedClaims.uid;
    const db = await getFirestore();
    const userRef = db.collection(COLLECTIONS.USERS).doc(uid);
    await db.runTransaction(async (transaction) => {
        const userDoc = await transaction.get(userRef);
        if (!userDoc.exists) return;
        const user = userDoc.data() as User;
        const newTotalScore = (user.stats.totalScore || 0) + params.score;
        const newScoreForDifficulty = (user.stats.scores?.[params.difficulty] || 0) + params.score;
        transaction.update(userRef, {
            'stats.totalScore': newTotalScore,
            [`stats.scores.${params.difficulty}`]: newScoreForDifficulty,
            'stats.wordsMastered': FieldValue.increment(params.wordsMastered),
            'stats.gamesPlayed': FieldValue.increment(1),
            'stats.lastGamePlayedAt': FieldValue.serverTimestamp(),
        });
    });
}
