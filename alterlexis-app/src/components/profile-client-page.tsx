'use client';

import { useState } from 'react';
import { User, Locale } from '@/types/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { updateUserProfile, deleteUserAccount } from '@/actions/userActions';
import { redeemPremiumKey } from '@/actions/premiumActions';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';

const LANGUAGES = [
    { name: 'Français', code: 'fr' }, { name: 'Anglais', code: 'en' }, { name: 'Espagnol', code: 'es' },
    { name: 'Allemand', code: 'de' }, { name: 'Italien', code: 'it' }, { name: 'Portugais', code: 'pt' },
    { name: 'Russe', code: 'ru' }, { name: 'Chinois', code: 'zh' }, { name: 'Arabe', code: 'ar' }
];

interface ProfileClientPageProps {
  user: User;
}

export default function ProfileClientPage({ user }: ProfileClientPageProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { resetPassword } = useAuth();
  
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [nativeLang, setNativeLang] = useState(user.preferences.nativeLang);
  const [targetLang, setTargetLang] = useState(user.preferences.targetLang);
  const [premiumKey, setPremiumKey] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleProfileUpdate = async () => { /* ... */ };
  const handleRedeemKey = async () => { /* ... */ };
  const handleDeleteAccount = async () => { /* ... */ };
  const handlePasswordReset = async () => { /* ... */ };

  const isPremium = user.premium_expires_at && user.premium_expires_at > Date.now();

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gold-accent mb-10">Mon Espace Personnel</h1>
      <div className="grid gap-8">
        
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader><CardTitle className="text-gold-accent">Informations Personnelles</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="displayName">Pseudo</Label>
              <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user.email} disabled />
            </div>
            <Button onClick={handleProfileUpdate} disabled={isSaving}>{isSaving ? "Sauvegarde..." : "Sauvegarder"}</Button>
          </CardContent>
        </Card>

        {/* Other cards... */}

      </div>
    </div>
  );
}
