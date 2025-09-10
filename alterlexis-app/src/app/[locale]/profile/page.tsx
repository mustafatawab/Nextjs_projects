import { getDictionary } from '@/lib/get-dictionary';
import { Locale, User } from '@/types/types';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { getUserProfile } from '@/actions/userActions';
import ProfileClientPage from '@/components/profile-client-page';
import { redirect } from 'next/navigation';

interface ProfilePageProps {
  params: { locale: Locale };
}

export default async function ProfilePage({ params: { locale } }: ProfilePageProps) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims) {
    redirect(`/${locale}/login`);
  }

  const user = await getUserProfile(decodedClaims.uid);

  if (!user) {
    redirect(`/${locale}/login`);
  }

  return (
    <main>
      <ProfileClientPage user={user} />
    </main>
  );
}
