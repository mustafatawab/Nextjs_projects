'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { Dictionary } from '@/types/types';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { toast } from '@/hooks/use-toast';

interface LoginFormProps {
  dictionary: Dictionary;
}

export function LoginForm({ dictionary }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading } = useAuth();



  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      await signIn(email, password);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gold-accent">Bienvenue Gardien</h1>
        <p className="text-muted-text">Connectez-vous pour continuer votre voyage.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Mot de passe</Label>
            <Link href="#" className="text-xs text-muted-text hover:text-gold-accent hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>
          <Input 
            id="password" 
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Connexion
        </Button>
      </form>
      <div className="text-center text-sm text-muted-text">
        Nouveau sur AlterLexis ?{' '}
        <Link href="/signup" className="font-semibold text-gold-accent hover:underline">
          Créez un compte
        </Link>
      </div>
    </div>
  );
}
