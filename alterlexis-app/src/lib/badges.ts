import { User, Badge } from '@/types/types';

export const BADGES = {
  // Word mastery badges
  WORDSMITH_NOVICE: { id: 'WORDSMITH_NOVICE', name: 'Apprenti Lexicographe', description: 'Maîtriser 10 mots.' },
  WORDSMITH_ADEPT: { id: 'WORDSMITH_ADEPT', name: 'Lexicographe Compétent', description: 'Maîtriser 100 mots.' },

  // Streak badges
  STREAK_STARTER: { id: 'STREAK_STARTER', name: 'Début de Série', description: 'Maintenir une série de 3 jours.' },
  STREAK_CHAMPION: { id: 'STREAK_CHAMPION', name: 'Champion de la Série', description: 'Maintenir une série de 7 jours.' },
  
  // Premium Badge
  GOLDEN_KEY_HOLDER: { id: 'GOLDEN_KEY_HOLDER', name: 'Gardien de la Clé d\'Or', description: 'Soutenir le projet en devenant Premium.' }
};

export function checkNewBadges(user: User): Badge[] {
  const newBadges: Badge[] = [];
  const userBadgeIds = new Set(user.badges.map(b => b.id));

  const award = (badge: typeof BADGES[keyof typeof BADGES]) => {
    if (!userBadgeIds.has(badge.id)) {
      newBadges.push({ ...badge, awardedAt: Date.now() });
    }
  };

  if (user.stats.wordsMastered >= 10) award(BADGES.WORDSMITH_NOVICE);
  if (user.stats.wordsMastered >= 100) award(BADGES.WORDSMITH_ADEPT);
  if (user.stats.currentStreak >= 3) award(BADGES.STREAK_STARTER);
  if (user.stats.currentStreak >= 7) award(BADGES.STREAK_CHAMPION);
  
  // The Golden Key badge is awarded separately upon key redemption, not here.

  return newBadges;
}
