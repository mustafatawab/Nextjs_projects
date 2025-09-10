import { getDictionary } from '@/lib/get-dictionary'; // Corrected function name
import { Locale } from '@/types/types';

interface LegalPageProps {
  params: { locale: Locale };
}

export default async function LegalPage({ params: { locale } }: LegalPageProps) {
  const dictionary = await getDictionary(locale);
  const content = dictionary.legalPage;

  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gold-accent mb-10">{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    </main>
  );
}
