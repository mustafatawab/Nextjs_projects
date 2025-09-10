import { User } from '@/types/types';

export const i18n = {
  defaultLocale: 'en',
  locales: ['fr', 'en', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ar'],
};

export const DIFFICULTIES = [
  { key: 'facile', label: 'Facile' },
  { key: 'moyen', label: 'Moyen' },
  { key: 'difficile', label: 'Difficile (Premium)' },
  { key: 'competitif', label: 'Compétitif (Premium)' },
];

export const PREMIUM_DIFFICULTIES = ['difficile', 'competitif'];

export const MASTERY_LEVELS = 5; // 5 levels of mastery for a word
export const WORDS_PER_GAME_SESSION = 10; // Number of words in a game session
export const WORD_BANK_TARGET_COUNT = 10000; // Target words per language/difficulty
export const SEEDING_BATCH_SIZE = 50; // Number of words to generate per AI call

export const BADGE_DEFINITIONS = [
  { id: 'polyglotte-debutant', name: 'Polyglotte Débutant', description: 'Apprendre des mots dans 2 langues différentes.', check: (stats: User['stats']) => stats.uniqueLanguagesMastered >= 2 },
  { id: 'maitre-100-mots', name: 'Maître des 100 Mots', description: 'Maîtriser 100 mots.', check: (stats: User['stats']) => stats.wordsMastered >= 100 },
  { id: 'serie-7-jours', name: 'Série de 7 jours', description: "Maintenir une série d'apprentissage de 7 jours.", check: (stats: User['stats']) => stats.currentStreak >= 7 },
  // Add more badge definitions here
];

// Firebase Collection Names
export const COLLECTIONS = {
  USERS: 'users',
  WORDBANK: 'wordBank',
  PREMIUM_KEYS: 'premiumKeys',
  MAIL: 'mail',
  MASTERED_WORDS: 'masteredWords',
};
