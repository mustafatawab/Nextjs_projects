import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import { SignupForm } from '@/components/auth/signup-form';

interface SignupPageProps {
  params: { locale: Locale };
}

export default async function SignupPage({ params: { locale } }: SignupPageProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md bg-card-blue border border-gold-accent/20 rounded-2xl p-8 shadow-2xl">
        <SignupForm dictionary={dictionary} />
      </div>
    </div>
  );
}
