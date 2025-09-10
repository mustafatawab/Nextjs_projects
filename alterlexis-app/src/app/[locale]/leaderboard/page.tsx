import { getDictionary } from '@/lib/get-dictionary';
import { Locale, Difficulty } from '@/types/types';
import LeaderboardClientPage from '@/components/leaderboard-client-page';
import { getLeaderboard } from '@/actions/leaderboardActions';

interface LeaderboardPageProps {
  params: { locale: Locale };
  searchParams?: { 
    difficulty?: string;
    targetLang?: string;
  };
}

export default async function LeaderboardPage({
  params: { locale },
  searchParams,
}: LeaderboardPageProps) {
  const dictionary = await getDictionary(locale);
  // Set default filters if not provided in the URL
  const difficulty = (searchParams?.difficulty as Difficulty) || 'difficile';
  const targetLang = (searchParams?.targetLang as Locale) || 'en';

  const leaderboardData = await getLeaderboard({ difficulty, targetLang });

  return (
    <main>
      <LeaderboardClientPage
        dictionary={dictionary}
        initialLeaderboardData={leaderboardData}
        initialDifficulty={difficulty}
        initialLanguage={targetLang}
      />
    </main>
  );
}
