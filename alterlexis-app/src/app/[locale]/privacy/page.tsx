import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';

interface PrivacyPageProps {
  params: { locale: Locale };
}

export default async function PrivacyPage({ params: { locale } }: PrivacyPageProps) {
  const dictionary = await getDictionary(locale);
  const content = dictionary.privacyPage;

  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gold-accent mb-10">{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    </main>
  );
}
