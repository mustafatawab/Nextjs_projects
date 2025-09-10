import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/types/types';
import ContactForm from '@/components/auth/contact-form';

interface ContactPageProps {
  params: { locale: Locale };
}

export default async function ContactPage({
  params: { locale },
}: ContactPageProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gold-accent">Contactez-nous</h1>
        <p className="text-lg text-muted-text mt-2">Une question ? Une suggestion ? Nous sommes à votre écoute.</p>
      </div>
      <div className="bg-card-blue border border-gold-accent/20 rounded-lg p-8">
        <ContactForm dictionary={dictionary} />
      </div>
    </div>
  );
}
