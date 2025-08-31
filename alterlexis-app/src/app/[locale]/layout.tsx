import '../globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getDictionary } from '@/lib/get-dictionary';
import { i18n } from '@/lib/constants';
import { AuthProvider } from '@/hooks/use-auth';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/footer';
import AnimatedBackground from '@/components/layout/animated-background';
import { Locale, Dictionary } from '@/types/types';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'AlterLexis - Ancrez les mots dans votre mémoire',
  description: 'Découvrez une méthode d\'apprentissage unique et exigeante. Oubliez les listes, vivez la langue.',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dictionary: Dictionary = await getDictionary(locale);
  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={`${poppins.variable} dark`}>
      <body className="relative antialiased overflow-x-hidden">
        <AnimatedBackground />
        <AuthProvider locale={locale} dictionary={dictionary}>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header locale={locale} dictionary={dictionary} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer locale={locale} dictionary={dictionary} />
            <Toaster />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
