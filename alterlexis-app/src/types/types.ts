export type Locale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ar';
export type Difficulty = 'facile' | 'moyen' | 'difficile' | 'competitif';

export interface Dictionary {
  common: { [key: string]: string };
  auth: { [key: string]: string };
  homepage: { [key: string]: string };
  game: { [key: string]: string };
  dashboard: { [key: string]: string };
  leaderboard: { [key: string]: string };
  admin: { [key: string]: string };
  legalPage: { title: string; content: string };
  privacyPage: { title: string; content: string };
  termsPage: { title: string; content: string };
  howItWorksPage: { title: string; content: string };
}

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
    successRate: number;
    scores: { [key in Difficulty]: number; };
    dailyMediumPlays: number;
    lastPlayDate: string;
    lastGamePlayedAt?: number;
    uniqueLanguagesMastered: number;
  };
  badges: Badge[];
}

export interface Word {
  wordId: string;
  word: string;
  translation: string;
  definition: string;
  points: number;
}

export interface PremiumKey {
  id: string;
  durationDays: number;
  createdAt: number;
  usedByUid: string | null;
  usedAt: number | null;
  isUsed: boolean;
}

export interface AdminErrorLog {
  id: string;
  timestamp: number;
  type: 'seeding' | 'other';
  message: string;
  details?: string | object;
}
