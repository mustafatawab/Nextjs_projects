import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import PremiumClientPage from '@/components/premium/premium-client-page';

interface PremiumPageProps {
  params: { locale: Locale };
}

export default async function PremiumPage({ params: { locale } }: PremiumPageProps) {
  const dictionary = await getDictionary(locale);

  return <PremiumClientPage dictionary={dictionary} />;
}
