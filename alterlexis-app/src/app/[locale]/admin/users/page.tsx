import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import AdminUsersClientPage from '@/components/admin/users-client-page';
import { getUsers } from '@/actions/adminActions';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { redirect } from 'next/navigation';

interface AdminUsersPageProps {
  params: { locale: Locale };
}

export default async function AdminUsersPage({
  params: { locale },
}: AdminUsersPageProps) {
  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims || !decodedClaims.admin) {
    redirect(`/${locale}/dashboard`);
  }
  
  const { users } = await getUsers();

  return (
    <main>
      <AdminUsersClientPage dictionary={dictionary} users={users} />
    </main>
  );
}
