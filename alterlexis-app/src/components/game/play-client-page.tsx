'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dictionary, Locale, Word, User, Difficulty } from '@/types/types';
import { getGameWords, updateUserStats } from '@/actions/gameActions';
import { useRouter } from 'next/navigation';
import { Loader2, Check, X, Volume2, Keyboard, Lightbulb, ShieldCheck, ChevronsRight, Key } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { GameSummary } from './game-summary';
import { VirtualKeyboard } from './virtual-keyboard';
import { useToast } from '@/hooks/use-toast';

interface PlayClientPageProps {
  dictionary: Dictionary;
  locale: Locale;
  targetLang: Locale;
  difficulty: Difficulty;
  user: User | null;
}

interface GameWord extends Word {
  masteryLevel: number;
  errors: number;
}

const GLOBAL_MAX_MASTERY_LEVEL = 4;

const normalizeString = (str: string) => {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const maskWord = (word: string, level: number, maxLevelForWord: number): string => {
  if (!word) return '';
  if (level === 0) return word;
  if (level >= maxLevelForWord) return '_'.repeat(word.length);
  const percentage = level / maxLevelForWord;
  const lettersToHide = Math.floor(word.length * percentage);
  const visibleChars = Math.max(1, word.length - lettersToHide);
  return word.substring(0, visibleChars) + '_'.repeat(word.length - visibleChars);
};

export default function PlayClientPage({ dictionary, locale, targetLang, difficulty, user }: PlayClientPageProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [words, setWords] = useState<GameWord[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'mastered' | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const hasLoaded = useRef(false);

  const loadWords = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setIsFinished(false);
    setCurrentWordIndex(0);
    setScore(0);
    setWords([]);
    try {
      const gameWords = await getGameWords({ targetLang, difficulty });
      if (gameWords.length === 0) {
        setError(dictionary.game.noWordsAvailable);
      } else {
        setWords(gameWords.map((word: Word) => ({ ...word, masteryLevel: 0, errors: 0 })));
      }
    } catch (err) {
      setError(dictionary.game.failedToLoadGame);
    } finally {
      setIsLoading(false);
    }
  }, [targetLang, difficulty, dictionary]);

  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      loadWords();
    }
  }, [loadWords]);

  const finalizeGame = useCallback(async () => {
    if (user && words.length > 0) {
      await updateUserStats({
        score,
        wordsMastered: words.filter(w => w.masteryLevel >= (w.word.length + 1) || w.masteryLevel >= GLOBAL_MAX_MASTERY_LEVEL).length,
        difficulty,
      });
    }
  }, [score, words, user, difficulty]);

  useEffect(() => { if (isFinished) finalizeGame(); }, [isFinished, finalizeGame]);

  const handleNextWord = useCallback(() => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setShowHint(false);
    } else {
      setIsFinished(true);
    }
  }, [currentWordIndex, words.length]);

  const currentWord = useMemo(() => words.length > 0 ? words[currentWordIndex] : null, [words, currentWordIndex]);
  
  const maxMasteryForCurrentWord = useMemo(() => {
      if (!currentWord) return GLOBAL_MAX_MASTERY_LEVEL;
      return Math.min(currentWord.word.length + 1, GLOBAL_MAX_MASTERY_LEVEL);
  }, [currentWord]);

  const handleGuess = useCallback(() => {
    if (!currentWord || feedback) return;
    
    if (normalizeString(guess) === normalizeString(currentWord.word)) {
      const newMasteryLevel = currentWord.masteryLevel + 1;
      const isMastered = newMasteryLevel >= maxMasteryForCurrentWord;
      
      setScore(prev => prev + (10 * newMasteryLevel));
      setFeedback(isMastered ? 'mastered' : 'correct');

      setTimeout(() => {
        if (isMastered) handleNextWord();
        else setWords(ws => ws.map((w, i) => i === currentWordIndex ? { ...w, masteryLevel: newMasteryLevel } : w));
        setShowHint(false);
        setFeedback(null);
      }, 1500);
    } else {
      setScore(prev => Math.max(0, prev - 5));
      setWords(ws => ws.map((w, i) => i === currentWordIndex ? { ...w, errors: w.errors + 1 } : w));
      setFeedback('incorrect');
      setTimeout(() => setFeedback(null), 1000);
    }
    setGuess('');
  }, [guess, currentWord, feedback, handleNextWord, maxMasteryForCurrentWord, setWords]); // Added setWords to dependency array

  const handleSpeak = () => {
    if ('speechSynthesis' in window && currentWord) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices.find(v => v.lang.startsWith(targetLang)) || null;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSkipWord = () => {
    toast({ description: "Mot passé." });
    handleNextWord();
  };

  const handleVirtualKeyPress = (key: string) => {
    if (key === 'Backspace') setGuess(g => g.slice(0, -1));
    else setGuess(g => g + key);
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen"><Loader2 className="h-16 w-16 animate-spin text-gold-accent" /></div>;
  if (error) return <div className="text-center text-red-400 py-20">{error}</div>;

  if (isFinished) {
    return <GameSummary score={score} words={words} onPlayAgain={loadWords} onGoToDashboard={() => router.push(`/${locale}/dashboard`)} />;
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <Progress value={((currentWordIndex) / words.length) * 100} className="mb-4" />
        <Card className="bg-card-blue border-gold-accent/20 p-6 md:p-8">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        {Array.from({ length: maxMasteryForCurrentWord }).map((_, i) => (
                            <Key key={i} className={`h-6 w-6 transition-colors ${currentWord && i < currentWord.masteryLevel ? 'text-gold-accent' : 'text-muted'}`} />
                        ))}
                    </div>
                    <div className="text-2xl font-bold text-gold-accent">Score: {score}</div>
                </div>
                 <CardDescription className="text-center pt-2">Mot : {currentWordIndex + 1} / {words.length}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-6xl md:text-8xl font-bold tracking-widest text-light-text my-12 min-h-[100px]">
                    {currentWord ? maskWord(currentWord.word, currentWord.masteryLevel, maxMasteryForCurrentWord) : ''}
                </p>
                <div className="min-h-[3rem] mb-8">
                    {showHint && currentWord && <p className="text-xl text-muted-text animate-fade-in-up">{currentWord.translation}</p>}
                </div>
                <Input className="text-2xl h-14 text-center focus:ring-gold-accent" value={guess} onChange={e => setGuess(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleGuess()} autoFocus disabled={!!feedback}/>
            </CardContent>
        </Card>
      </div>
      <div className="flex gap-4 mt-6">
        <Button variant="outline" onClick={() => setShowHint(true)}><Lightbulb className="mr-2"/> Révéler l&apos;indice</Button>
        <Button variant="outline" onClick={handleSpeak}><Volume2 className="mr-2" /> Écouter</Button>
        <Button variant="outline" onClick={handleSkipWord}><ChevronsRight className="mr-2"/> Passer</Button>
      </div>
       {currentWord && (
          <Card className="w-full max-w-4xl mt-6 bg-card-blue/50 border-gold-accent/10">
              <CardHeader><CardTitle className="text-lg text-gold-accent">Définition</CardTitle></CardHeader>
              <CardContent><p className="text-muted-text">{currentWord.definition}</p></CardContent>
          </Card>
      )}
       {showKeyboard && (
          <div className="w-full max-w-4xl mt-4">
              <VirtualKeyboard onKeyPress={handleVirtualKeyPress} targetLang={targetLang} />
          </div>
        )}
    </div>
  );
}
