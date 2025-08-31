'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Word } from '@/types/types'; // Correctly import Word
import { ScrollArea } from '@/components/ui/scroll-area';

interface GameSummaryProps {
  score: number;
  words: Word[];
  onPlayAgain: () => void;
  onGoToDashboard: () => void;
}

export const GameSummary = ({ score, words, onPlayAgain, onGoToDashboard }: GameSummaryProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl bg-card-blue border-gold-accent/20 animate-fade-in-up">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gold-accent">Session Terminée !</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl mb-4">Votre score final :</p>
          <p className="text-7xl font-bold text-gold-accent mb-8">{score}</p>
          
          <h3 className="text-xl font-semibold mb-4">Récapitulatif des mots</h3>
          <ScrollArea className="h-48 rounded-md border border-gold-accent/20 p-4 text-left">
            <ul>
              {words.map((word) => (
                <li key={word.wordId} className="mb-2">
                  <span className="font-bold text-light-text">{word.word}</span>
                  <span className="text-muted-text">: {word.translation}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
          
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" onClick={onPlayAgain}>Rejouer</Button>
            <Button size="lg" variant="outline" onClick={onGoToDashboard}>Retour au Tableau de Bord</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
