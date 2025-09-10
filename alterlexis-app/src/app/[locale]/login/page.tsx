import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import { LoginForm } from '@/components/auth/login-form';

interface LoginPageProps {
  params: { locale: Locale };
}

export default async function LoginPage({ params: { locale } }: LoginPageProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md bg-card-blue border border-gold-accent/20 rounded-2xl p-8 shadow-2xl">
        <LoginForm dictionary={dictionary} />
      </div>
    </div>
  );
}
