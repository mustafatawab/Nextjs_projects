'use client';

import { useState } from 'react';
import { Dictionary, User, Locale, Difficulty } from '@/types/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const DIFFICULTIES: { key: Difficulty; label: string }[] = [
    { key: 'difficile', label: 'Difficile' },
    { key: 'competitif', label: 'Compétitif' }
];

const LANGUAGES: { name: string; code: Locale }[] = [
    { name: 'Anglais', code: 'en' },
    { name: 'Français', code: 'fr' },
    { name: 'Espagnol', code: 'es' },
    { name: 'Allemand', code: 'de' },
    //... add all other languages here
];

interface LeaderboardClientPageProps {
  dictionary: Dictionary;
  initialLeaderboardData: Partial<User>[];
  initialDifficulty: Difficulty;
  initialLanguage: Locale;
}

export default function LeaderboardClientPage({
  initialLeaderboardData,
  initialDifficulty,
  initialLanguage,
}: LeaderboardClientPageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [language, setLanguage] = useState(initialLanguage);
  
  const handleFilterChange = (type: 'difficulty' | 'targetLang', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gold-accent">Classement</h1>
        <p className="text-lg text-muted-text mt-2">Qui sont les maîtres du vocabulaire ?</p>
      </div>

      <div className="flex justify-end gap-4 mb-6">
        <Select value={language} onValueChange={(value) => handleFilterChange('targetLang', value)}>
          <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
          <SelectContent>{LANGUAGES.map(l => <SelectItem key={l.code} value={l.code}>{l.name}</SelectItem>)}</SelectContent>
        </Select>
        <Select value={difficulty} onValueChange={(value) => handleFilterChange('difficulty', value)}>
          <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
          <SelectContent>{DIFFICULTIES.map(d => <SelectItem key={d.key} value={d.key}>{d.label}</SelectItem>)}</SelectContent>
        </Select>
      </div>

      <div className="bg-card-blue border border-gold-accent/20 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b-gold-accent/20">
              <TableHead className="w-[100px] text-gold-accent">Rang</TableHead>
              <TableHead className="text-gold-accent">Joueur</TableHead>
              <TableHead className="text-right text-gold-accent">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialLeaderboardData.map((user, index) => (
              <TableRow key={user.uid} className="border-b-gold-accent/10">
                <TableCell className="font-medium text-lg text-center">{index + 1}</TableCell>
                <TableCell className="font-semibold">{user.displayName || 'Anonyme'}</TableCell>
                <TableCell className="text-right font-bold text-gold-accent">{user.stats?.totalScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
