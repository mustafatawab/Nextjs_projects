import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import { ErrorsClientPage } from '@/components/admin/errors-client-page'; // Corrected import
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { redirect } from 'next/navigation';

interface AdminErrorsPageProps {
  params: { locale: Locale };
}

export default async function AdminErrorsPage({
  params: { locale },
}: AdminErrorsPageProps) {
  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims || !decodedClaims.admin) {
    redirect(`/${locale}/dashboard`);
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        {dictionary.admin?.errorsLog || 'Error Logs'}
      </h1>
      <ErrorsClientPage dictionary={dictionary} locale={locale} />
    </main>
  );
}
