'use client';

import { useState } from 'react';
import { Dictionary, PremiumKey } from '@/types/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { generatePremiumKeys } from '@/actions/adminActions';
import { useToast } from '@/hooks/use-toast';

interface AdminPremiumKeysClientPageProps {
  dictionary: Dictionary;
  premiumKeys: PremiumKey[];
}

export default function AdminPremiumKeysClientPage({
  premiumKeys: initialKeys,
}: AdminPremiumKeysClientPageProps) {
    const { toast } = useToast();
    const [premiumKeys, setPremiumKeys] = useState(initialKeys);
    const [numberOfKeys, setNumberOfKeys] = useState(1);
    const [duration, setDuration] = useState(30);
    const [generatedKeys, setGeneratedKeys] = useState<string[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateKeys = async () => {
        setIsGenerating(true);
        try {
            const newKeys = await generatePremiumKeys(numberOfKeys, duration);
            setGeneratedKeys(newKeys);
            // You might want to refresh the list of all keys here
            toast({ title: "Success", description: `${newKeys.length} keys generated.` });
        } catch (error) {
            toast({ title: "Error", description: "Failed to generate keys.", variant: "destructive" });
        }
        setIsGenerating(false);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gold-accent mb-10">Gestion des Clés Premium</h1>
            <div className="grid gap-10 lg:grid-cols-2">
                <Card className="bg-card-blue border-gold-accent/20">
                    <CardHeader><CardTitle>Générer de Nouvelles Clés</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="numberOfKeys">Nombre de clés</Label>
                            <Input id="numberOfKeys" type="number" value={numberOfKeys} onChange={(e) => setNumberOfKeys(parseInt(e.target.value))} />
                        </div>
                        <div>
                            <Label htmlFor="duration">Durée de validité (jours)</Label>
                            <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} />
                        </div>
                        <Button onClick={handleGenerateKeys} disabled={isGenerating}>
                            {isGenerating ? "Génération..." : "Générer les clés"}
                        </Button>
                    </CardContent>
                </Card>
                <Card className="bg-card-blue border-gold-accent/20">
                    <CardHeader><CardTitle>Clés Générées Récemment</CardTitle></CardHeader>
                    <CardContent>
                        {generatedKeys.length > 0 ? (
                            <Textarea readOnly value={generatedKeys.join('\n')} rows={Math.min(10, generatedKeys.length)} className="text-xs" />
                        ) : (
                            <p className="text-muted-text">Aucune clé générée dans cette session.</p>
                        )}
                    </CardContent>
                </Card>
            </div>

            <div className="mt-10 bg-card-blue border border-gold-accent/20 rounded-lg">
                <Table>
                    <TableHeader><TableRow><TableHead>Clé</TableHead><TableHead>Utilisée</TableHead></TableRow></TableHeader>
                    <TableBody>{/* ... table content ... */}</TableBody>
                </Table>
            </div>
        </div>
    );
}
