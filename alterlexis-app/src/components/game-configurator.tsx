'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User, Locale, Dictionary, Difficulty } from '@/types/types';
import { useToast } from '@/hooks/use-toast';
import { checkAndDecrementDailyPlays } from '@/actions/gameActions';
import Image from 'next/image';

const LANGUAGES = [
    { name: 'Français', code: 'fr', flag: 'fr' }, { name: 'Anglais', code: 'en', flag: 'gb' }, { name: 'Español', code: 'es', flag: 'es' },
    { name: 'Allemand', code: 'de', flag: 'de' }, { name: 'Italien', code: 'it', flag: 'it' }, { name: 'Portugais', code: 'pt', flag: 'pt' },
    { name: 'Russe', code: 'ru', flag: 'ru' }, { name: 'Chinois', code: 'zh', flag: 'cn' }, { name: 'Arabe', code: 'ar', flag: 'sa' }
];

const DIFFICULTIES: { key: Difficulty, label: string, description: string, premium?: boolean }[] = [
    { key: 'facile', label: 'Facile', description: 'Accès illimité' },
    { key: 'moyen', label: 'Moyen', description: '3 parties / jour' },
    { key: 'difficile', label: 'Difficile', description: 'Premium', premium: true },
    { key: 'competitif', label: 'Compétitif', description: 'Premium', premium: true }
];

const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"></path><path d="M3 12.6V8c0-1.1.9-2 2-2h14"></path><path d="M7 21.9l-4-4 4-4"></path><path d="M21 11.4v4.6c0 1.1-.9 2-2 2H5"></path></svg>
);

interface GameConfiguratorProps {
  dictionary: Dictionary;
  user: User | null;
}

export function GameConfigurator({ user }: GameConfiguratorProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [nativeLang, setNativeLang] = useState<Locale>(user?.preferences?.nativeLang || 'fr');
  const [targetLang, setTargetLang] = useState<Locale>(user?.preferences?.targetLang || 'en');
  const [difficulty, setDifficulty] = useState<Difficulty>(user?.preferences?.lastDifficulty || 'facile');
  const [remainingPlays, setRemainingPlays] = useState(user?.stats?.dailyMediumPlays ?? 3);
  const [isStartingGame, setIsStartingGame] = useState(false);
  const isPremium = !!user?.premium_expires_at && user.premium_expires_at > Date.now();

  useEffect(() => {
    if (user) {
        const today = new Date().toISOString().split('T')[0];
        setRemainingPlays(user.stats.lastPlayDate !== today ? 3 : user.stats.dailyMediumPlays);
    }
  }, [user]);

  const handleStartGame = async () => {
    setIsStartingGame(true);
    if (difficulty === 'moyen' && user && !isPremium) {
        try {
            const result = await checkAndDecrementDailyPlays();
            if (result.canPlay) {
                setRemainingPlays(result.remainingPlays);
                router.push(`/${nativeLang}/play?targetLang=${targetLang}&difficulty=${difficulty}`);
            } else {
                toast({ title: "Limite atteinte", description: "Passez Premium pour un accès illimité.", variant: "destructive" });
            }
        } catch (error) {
            toast({ title: "Erreur", description: "Impossible de vérifier vos parties restantes.", variant: "destructive" });
        }
    } else {
        router.push(`/${nativeLang}/play?targetLang=${targetLang}&difficulty=${difficulty}`);
    }
    setIsStartingGame(false);
  };

  return (
    <div className="bg-card-blue p-6 sm:p-8 md:p-12 rounded-2xl border border-gold-accent/20 shadow-2xl shadow-black/30 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-10">Configurez votre session</h2>
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 mb-10">
            <div>
                <label className="block mb-4 font-medium text-muted-text text-center">Je parle</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {LANGUAGES.map(lang => (
                        <button key={lang.code} onClick={() => setNativeLang(lang.code as Locale)} className={`lang-btn flex items-center justify-center space-x-2 py-2 px-4 rounded-lg border-2 transition-all ${nativeLang === lang.code ? 'border-gold-accent bg-gold-accent/10' : 'border-gold-accent/30 hover:border-gold-accent'}`}>
                            <Image src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} width={20} height={15} className="h-auto" />
                            <span className="text-sm font-semibold">{lang.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="pt-8 text-center">
                <button onClick={() => { setNativeLang(targetLang); setTargetLang(nativeLang); }} className="bg-card-blue p-3 rounded-full border-2 border-gold-accent/30 hover:rotate-180 transition-all duration-300">
                    <SwapIcon />
                </button>
            </div>
            <div>
                <label className="block mb-4 font-medium text-muted-text text-center">Je veux apprendre</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                     {LANGUAGES.map(lang => (
                        <button key={lang.code} onClick={() => setTargetLang(lang.code as Locale)} className={`lang-btn flex items-center justify-center space-x-2 py-2 px-4 rounded-lg border-2 transition-all ${targetLang === lang.code ? 'border-gold-accent bg-gold-accent/10' : 'border-gold-accent/30 hover:border-gold-accent'}`}>
                            <Image src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} width={20} height={15} className="h-auto" />
                            <span className="text-sm font-semibold">{lang.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div>
            <h3 className="font-medium text-muted-text mb-4">Choisissez une difficulté</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
                {DIFFICULTIES.map(d => {
                    const isDisabled = (d.premium && !isPremium) || (d.key === 'moyen' && !isPremium && remainingPlays <= 0);
                    return (
                        <button key={d.key} onClick={() => setDifficulty(d.key as Difficulty)} disabled={isDisabled} className={`p-4 rounded-lg border-2 text-center font-semibold transition-all relative ${difficulty === d.key ? 'border-gold-accent bg-gold-accent/10' : 'border-gold-accent/30 hover:border-gold-accent'} ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}>
                            {d.premium && <span className="absolute top-1 right-1 text-gold-accent">👑</span>}
                            {d.label}
                            <span className="block text-xs font-normal text-muted-text">
                                {d.key === 'moyen' && user && !isPremium ? `(${remainingPlays}/3)` : d.description}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
        <div className="mt-10">
            <Button onClick={handleStartGame} size="lg" className="w-full font-bold text-lg p-4 h-auto animate-subtle-glow" disabled={isStartingGame}>
                {isStartingGame ? "Chargement..." : "Lancer une partie"}
            </Button>
        </div>
    </div>
  );
}
