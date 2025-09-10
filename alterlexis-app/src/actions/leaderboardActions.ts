"use server";

import { getFirestore } from "@/lib/firebase/admin";
import { COLLECTIONS } from "@/lib/constants";
import { User, Difficulty, Locale } from "@/types/types";

interface GetLeaderboardParams {
  difficulty: Difficulty;
  targetLang: Locale; // Add language parameter
}

export async function getLeaderboard({
  difficulty,
  targetLang,
}: GetLeaderboardParams): Promise<Partial<User>[]> {
  const db = await getFirestore();

  const orderByField = `stats.scores.${difficulty}`;

  try {
    // The query is now more complex and will require a composite index
    // const snapshot = await db
    //   .collection(COLLECTIONS.USERS)
    //   .where('preferences.targetLang', '==', targetLang) // Filter by the language being learned
    //   .orderBy(orderByField, 'desc')
    //   .limit(50)
    //   .get();

    // if (snapshot.empty) {
    //   return [];
    // }

    // const leaderboard: Partial<User>[] = snapshot.docs.map((doc) => {
    //   const data = doc.data() as User;
    //   return {
    //     uid: data.uid,
    //     displayName: data.displayName,
    //     stats: {
    //       totalScore: data.stats.scores?.[difficulty] || 0,
    //     } as any,
    //   };
    // });

    // --------------
    const snapshot = await db
      .collection(COLLECTIONS.USERS)
      .where("preferences.targetLang", "==", targetLang)
      .get();

    if (snapshot.empty) {
      return [];
    }

    const leaderboard: Partial<User>[] = snapshot.docs
      .map((doc) => {
        const data = doc.data() as User;
        return {
          uid: data.uid,
          displayName: data.displayName,
          score: data.stats.scores?.[difficulty] || 0,
        };
      })
      .sort((a, b) => (b.score ?? 0) - (a.score ?? 0)) // sort in memory
      .slice(0, 50); // take top 50
    // ---------------------------

    return leaderboard;
  } catch (error) {
    console.error("Error getting leaderboard data:", error);
    // This will likely fail until the composite index is created in Firestore.
    // The error log in the server console will provide a direct link to create it.
    throw new Error(
      "Failed to get leaderboard data. A Firestore index is likely required."
    );
  }
}
