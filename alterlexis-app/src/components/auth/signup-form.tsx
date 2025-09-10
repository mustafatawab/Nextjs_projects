'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { Dictionary } from '@/types/types';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface SignupFormProps {
  dictionary: Dictionary; 
}

export function SignupForm({ dictionary }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signUp, loading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive",
      });
      return;
    }
    await signUp(email, password, displayName);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gold-accent">Créez votre compte</h1>
        <p className="text-muted-text">Rejoignez l&apos;aventure et commencez à apprendre.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="displayName">Pseudo</Label>
          <Input 
            id="displayName" 
            type="text"
            value={displayName} 
            onChange={(e) => setDisplayName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <Label htmlFor="password">Mot de passe</Label>
          <Input 
            id="password" 
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirmez le mot de passe</Label>
          <Input 
            id="confirmPassword" 
            type="password"
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          S&apos;inscrire
        </Button>
      </form>
      <div className="text-center text-sm text-muted-text">
        Vous avez déjà un compte ?{' '}
        <Link href="/login" className="font-semibold text-gold-accent hover:underline">
          Connectez-vous
        </Link>
      </div>
    </div>
  );
}
