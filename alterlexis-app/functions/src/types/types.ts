
// This file contains type definitions specific to the Cloud Functions.

export type Locale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ar';
export type Difficulty = 'facile' | 'moyen' | 'difficile' | 'competitif';

export interface Badge {
  id: string;
  name: string;
  description: string;
  awardedAt: number;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string | null;
  createdAt: number;
  premium_expires_at: number | null;
  isAdmin: boolean;
  preferences: {
    nativeLang: Locale;
    targetLang: Locale;
    lastDifficulty: Difficulty;
  };
  onboarding: {
    hasCompletedTour: boolean;
  };
  stats: {
    totalScore: number;
    wordsMastered: number;
    gamesPlayed: number;
    currentStreak: number;
    scores: {
        [key in Difficulty]: number;
    };
    dailyMediumPlays: number;
    lastPlayDate: string;
    lastGamePlayedAt?: number;
    uniqueLanguagesMastered: number;
  };
  badges: Badge[];
}
