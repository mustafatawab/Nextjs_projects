import { Locale, Dictionary } from '@/types/types';
import { getDictionary } from '@/lib/get-dictionary';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifySessionCookie } from '@/lib/firebase/admin';
import { AdminNavbar } from '@/components/admin/admin-navbar';

interface AdminLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function AdminLayout({ children, params: { locale } }: AdminLayoutProps) {
  const dictionary: Dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value || '';
  const decodedClaims = await verifySessionCookie(sessionCookie);
  console.log(decodedClaims)
  // if (decodedClaims && !decodedClaims.isAdmin) {
  //     redirect(`/${locale}/login`);
  // }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AdminNavbar dictionary={dictionary} locale={locale} />
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8">
        {children}
      </main>
    </div>
  );
}
