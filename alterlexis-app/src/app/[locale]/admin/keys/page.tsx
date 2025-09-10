import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import AdminPremiumKeysClientPage from '@/components/admin/premium-keys-client-page';
import { getPremiumKeys } from '@/actions/adminActions';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { redirect } from 'next/navigation';
import { getUserProfile } from '@/actions/userActions';


interface AdminPremiumKeysPageProps {
  params: { locale: Locale };
}

export default async function AdminPremiumKeysPage({
  params: { locale },
}: AdminPremiumKeysPageProps) {
  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims || !decodedClaims.admin) {
    redirect(`/${locale}/dashboard`);
  }
  
  const premiumKeys = await getPremiumKeys();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        {dictionary.admin?.premiumKeys || 'Premium Keys Management'}
      </h1>
      <AdminPremiumKeysClientPage
        dictionary={dictionary}
        premiumKeys={premiumKeys}
      />
    </main>
  );
}
