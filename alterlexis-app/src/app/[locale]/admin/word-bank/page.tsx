import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import { WordBankActions } from '@/components/admin/word-bank-actions';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { redirect } from 'next/navigation';

interface AdminWordBankPageProps {
  params: { locale: Locale };
}

export default async function AdminWordBankPage({
  params: { locale },
}: AdminWordBankPageProps) {
  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);

  if (!decodedClaims || !decodedClaims.admin) {
    redirect(`/${locale}/dashboard`);
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{dictionary.admin?.wordBank || 'Word Bank Management'}</h1>
      <WordBankActions dictionary={dictionary} locale={locale} />
    </div>
  );
}
