import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import AdminDashboardClientPage from '@/components/admin/dashboard-client-page';
import { getAdminKpis } from '@/actions/adminActions';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { redirect } from 'next/navigation';
import { getUserProfile } from '@/actions/userActions';

interface AdminDashboardPageProps {
  params: { locale: Locale };
}

export default async function AdminDashboardPage({
  params: { locale },
}: AdminDashboardPageProps) {
  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);
  
  if (!decodedClaims || !decodedClaims.admin) {
    redirect(`/${locale}/dashboard`);
  }

  const kpis = await getAdminKpis();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        {dictionary.admin?.dashboard || 'Admin Dashboard'}
      </h1>
      <AdminDashboardClientPage dictionary={dictionary} kpis={kpis} />
    </main>
  );
}
