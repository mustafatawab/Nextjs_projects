import { getDictionary } from '@/lib/get-dictionary';
import { Locale, User } from '@/types/types';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { getUserProfile } from '@/actions/userActions';
import DashboardClientPage from '@/components/dashboard-client-page';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { setAdminClaim } from '@/actions/adminActions';


interface DashboardPageProps {
  params: { locale: Locale };
}

export default async function DashboardPage({ params: { locale } }: DashboardPageProps) {
  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims) {
    return redirect(`/${locale}/login`);
    // return <div>hello</div>
  }

  const user = await getUserProfile(decodedClaims.uid);

  if (!user) {
    // This case might happen if Firestore profile creation failed after auth
    return redirect(`/${locale}/login?error=profile_not_found`);
  }

  return (
    <main>
      
      <DashboardClientPage dictionary={dictionary} user={user} />
    </main>
  );
}
