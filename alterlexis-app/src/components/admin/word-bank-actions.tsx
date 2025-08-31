'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Dictionary, Locale } from '@/types/types';
import { getWordBanks } from '@/actions/userActions';
import { RefreshCwIcon } from 'lucide-react';

interface WordBankActionsProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function WordBankActions({ dictionary, locale }: WordBankActionsProps) {
  const [wordBanks, setWordBanks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchWordBanks = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedWordBanks = await getWordBanks();
      setWordBanks(fetchedWordBanks);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch word banks.";
      console.error('Failed to fetch word banks:', error);
      toast({
        title: dictionary.common.error,
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [dictionary, toast]);

  useEffect(() => {
    fetchWordBanks();
  }, [fetchWordBanks]);

  return (
    <div>
       <div className="mb-4 p-4 bg-yellow-900/20 border border-yellow-400/50 rounded-lg">
          <h2 className="font-bold text-yellow-300">Page de Test de la Base de Données</h2>
          <p className="text-yellow-400/80 text-sm">
            Cette page tente de charger les 25 premiers mots de la collection `wordBank`. 
            Si des mots apparaissent ci-dessous, cela confirme que la connexion à Firestore est fonctionnelle.
          </p>
        </div>
      <div className="flex justify-end mb-4">
        <Button onClick={fetchWordBanks} disabled={loading} variant="outline">
          <RefreshCwIcon className={loading ? "mr-2 h-4 w-4 animate-spin" : "mr-2 h-4 w-4"} />
          {dictionary.common.refresh || 'Refresh'}
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{dictionary.admin.word || 'Word'}</TableHead>
            <TableHead>{dictionary.admin.difficulty || 'Difficulty'}</TableHead>
            <TableHead>{dictionary.admin.points || 'Points'}</TableHead>
            <TableHead>Definition (EN)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                {dictionary.common.loading || 'Loading...'}
              </TableCell>
            </TableRow>
          ) : wordBanks.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                {dictionary.admin.noWordBanksFound || 'No words found. The query returned empty. Check Firestore data or permissions.'}
              </TableCell>
            </TableRow>
          ) : (
            wordBanks.map((wb) => (
              <TableRow key={wb.id}>
                <TableCell className="font-medium">{wb.id}</TableCell>
                <TableCell>{wb.difficulty}</TableCell>
                <TableCell>{wb.points}</TableCell>
                <TableCell>{wb.definition_en}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
