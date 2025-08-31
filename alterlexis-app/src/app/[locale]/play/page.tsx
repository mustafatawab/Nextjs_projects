import { getDictionary } from '@/lib/get-dictionary';
import { Locale, Difficulty, User } from '@/types/types'; // Import Difficulty
import PlayClientPage from '@/components/game/play-client-page';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { getUserProfile } from '@/actions/userActions';

interface PlayPageProps {
  params: { locale: Locale };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function PlayPage({ params: { locale }, searchParams }: PlayPageProps) {
  const dictionary = await getDictionary(locale);
  const targetLang = searchParams?.targetLang as Locale;
  const difficulty = searchParams?.difficulty as Difficulty; // Cast to Difficulty type

  if (!targetLang || !difficulty) {
    return notFound();
  }
  const user = await getUserProfile("some-uid"); // Placeholder

  return (
    <main>
      <PlayClientPage
        dictionary={dictionary}
        locale={locale}
        targetLang={targetLang}
        difficulty={difficulty}
        user={user}
      />
    </main>
  );
}
