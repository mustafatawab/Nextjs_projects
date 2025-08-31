'use client';

import { useEffect, useState, useCallback } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AdminErrorLog, Locale, Dictionary } from '@/types/types';
import { getAdminErrorLogs } from '@/actions/adminActions';
import { formatDate } from '@/lib/utils';
import { RefreshCwIcon, ClipboardCopyIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ErrorsClientPageProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function ErrorsClientPage({ dictionary, locale }: ErrorsClientPageProps) {
  const [errorLogs, setErrorLogs] = useState<AdminErrorLog[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchErrorLogs = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedLogs = await getAdminErrorLogs();
      setErrorLogs(fetchedLogs);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch error logs.";
      console.error('Failed to fetch error logs:', error);
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
    fetchErrorLogs();
  }, [fetchErrorLogs]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: dictionary.common.success,
      description: dictionary.admin.copiedToClipboard,
      variant: 'default',
    });
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={fetchErrorLogs} disabled={loading} variant="outline">
          <RefreshCwIcon className={loading ? "mr-2 h-4 w-4 animate-spin" : "mr-2 h-4 w-4"} />
          {dictionary.common.refresh}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">{dictionary.admin.timestamp}</TableHead>
              <TableHead className="w-[100px]">{dictionary.admin.type}</TableHead>
              <TableHead>{dictionary.admin.message}</TableHead>
              <TableHead className="text-center w-[120px]">{dictionary.admin.details}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  {dictionary.common.loading}
                </TableCell>
              </TableRow>
            ) : errorLogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  {dictionary.admin.noErrorsFound}
                </TableCell>
              </TableRow>
            ) : (
              errorLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{formatDate(log.timestamp, locale)}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>{log.message}</TableCell>
                  <TableCell className="text-center">
                    {log.details && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            {dictionary.admin.viewDetails}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px] bg-card text-card-foreground border-border max-h-[80vh] flex flex-col">
                          <DialogHeader>
                            <DialogTitle>{dictionary.admin.errorDetails}</DialogTitle>
                            <DialogDescription>{dictionary.admin.fullErrorDetails}</DialogDescription>
                          </DialogHeader>
                          <div className="relative mt-4 flex-1 overflow-auto rounded-md bg-muted p-4 text-sm font-mono text-muted-foreground">
                            <pre className="whitespace-pre-wrap">{JSON.stringify(log.details, null, 2)}</pre>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                              onClick={() => copyToClipboard(JSON.stringify(log.details, null, 2))}
                            >
                              <ClipboardCopyIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
