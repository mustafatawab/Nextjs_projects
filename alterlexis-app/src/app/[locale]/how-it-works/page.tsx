
import { Locale } from '@/types/types';
import { Zap, Sparkles, Scale, HeartHandshake } from 'lucide-react'; // Corrected icon

interface HowItWorksPageProps {
  params: { locale: Locale };
}

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex flex-col items-center text-center">
        <div className="text-gold-accent mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gold-accent">{title}</h3>
        <p className="text-muted-text mt-2">{children}</p>
    </div>
);

export default async function HowItWorksPage({
  params: { locale },
}: HowItWorksPageProps) {

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gold-accent">Comment ça marche</h1>
        <p className="text-lg text-muted-text mt-2">Notre philosophie et notre méthode, en toute transparence.</p>
      </div>
      
      <div className="bg-card-blue border border-gold-accent/20 rounded-2xl p-10 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">L&apos;Engagement de l&apos;Artisan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard icon={<Zap size={40} />} title="Zéro Publicité">
                Votre temps d&apos;apprentissage est précieux. Nous ne le polluerons jamais avec des publicités.
            </FeatureCard>
            <FeatureCard icon={<Sparkles size={40} />} title="Contenu d'Excellence">
                Notre banque de mots est générée par une IA de pointe pour vous offrir un contenu riche et pertinent.
            </FeatureCard>
            <FeatureCard icon={<Scale size={40} />} title="Prix Juste et Transparent">
                Un seul forfait Premium accessible pour tout débloquer. Pas de frais cachés, pas de mauvaises surprises.
            </FeatureCard>
            <FeatureCard icon={<HeartHandshake size={40} />} title="Soutien Indépendant">
                Votre abonnement soutient un créateur passionné et garantit un avenir sans publicité pour l&apos;application.
            </FeatureCard>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>La Mécanique du &quot;Pendu Inversé&quot;</h2>
        <p>
            Plutôt que de simplement mémoriser des listes, notre approche unique vous force à ancrer activement chaque mot dans votre mémoire. Le mot est d&apos;abord affiché, puis des lettres sont progressivement masquées à chaque fois que vous réussissez à le réécrire. Le défi augmente jusqu&apos;à ce que vous puissiez taper le mot entier à l&apos;aveugle.
        </p>
        <h2>Le Modèle Freemium</h2>
        <p>
            Notre modèle est conçu pour être transparent et généreux, vous permettant de découvrir la valeur d&apos;AlterLexis à votre propre rythme.
        </p>
        <ul>
            <li><b>Visiteur :</b> Accès illimité au niveau Facile pour découvrir le cœur du jeu sans engagement.</li>
            <li><b>Utilisateur Gratuit :</b> Créez un compte pour sauvegarder vos statistiques et débloquer 3 parties en niveau Moyen chaque jour.</li>
            <li><b>Premium :</b> Obtenez un accès total et illimité à tous les niveaux de difficulté, participez aux classements compétitifs et soutenez directement le projet.</li>
        </ul>
      </div>
    </main>
  );
}
