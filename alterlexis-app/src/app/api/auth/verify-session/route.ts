import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  verifySessionCookie,
  getFirebaseAuth,
  getFirestore,
} from "@/lib/firebase/admin";
import { User } from "@/types/types";
import { COLLECTIONS } from "@/lib/constants";

export async function POST(request: Request) {
  const { idToken, logout } = await request.json();
  

  if (logout) {
    await cookies().delete("session")
    return NextResponse.json({
      message: "Loggout Successfully",
    });
  }
  if (!idToken) {
    /* ... */
  }

  try {
    const auth = await getFirebaseAuth();
    const decodedClaims = await auth.verifyIdToken(idToken);
    // ... (session cookie logic)
    const expiresIn = 60 * 60 * 24 * 1000 // 1 days
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn,
    });

    // Set cookie in response
    cookies().set("session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expiresIn / 1000,
      path: "/",
    });

    const db = await getFirestore();
    let userDoc = await db
      .collection(COLLECTIONS.USERS)
      .doc(decodedClaims.uid)
      .get();

    if (!userDoc.exists) {
      const newUser: User = {
        uid: decodedClaims.uid,
        email: decodedClaims.email || "",
        displayName: decodedClaims.name || "",
        createdAt: Date.now(),
        premium_expires_at: null,
        isAdmin: false,
        preferences: {
          nativeLang: "fr",
          targetLang: "en",
          lastDifficulty: "facile",
        },
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
      await db
        .collection(COLLECTIONS.USERS)
        .doc(decodedClaims.uid)
        .set(newUser);
      userDoc = await db
        .collection(COLLECTIONS.USERS)
        .doc(decodedClaims.uid)
        .get();
    }

    return NextResponse.json({ success: true, user: userDoc.data() });
  } catch (error) {
    console.log("Error " , error)
    return NextResponse.json(
      { error: "Failed to verify session." },
      { status: 401 }
    );
  }
}
