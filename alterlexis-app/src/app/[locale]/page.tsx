import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import { GameConfigurator } from '@/components/game-configurator';
import { getUserProfile } from '@/actions/userActions';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';

interface HomePageProps {
  params: { locale: Locale };
}

export const dynamic = "force-dynamic";


export default async function HomePage({ params: { locale } }: HomePageProps) {
  const dictionary = await getDictionary(locale);
  // console.log(dictionary)
  
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);
  const user = decodedClaims ? await getUserProfile(decodedClaims.uid) : null;

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-28 px-6">
          <div className="container mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up text-gold-accent">
                  {/* Ancrez les mots dans votre mémoire.  */}
                 {dictionary.homepage.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-text mt-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {/* Découvrez une méthode d&apos;apprentissage unique et exigeante. Oubliez les listes, vivez la langue. */}
                  {dictionary.homepage.subtitle}
              </p>
          </div>
      </section>

      {/* Game Configurator Section - Reduced top padding */}
      <section id="configurator" className="pb-16 md:pb-24 px-6">
          <div className="container mx-auto max-w-4xl">
              <GameConfigurator dictionary={dictionary} user={user} />
          </div>
      </section>
    </>
  );
}
