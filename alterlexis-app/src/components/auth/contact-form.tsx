'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dictionary } from '@/types/types';
import { sendContactMessage } from '@/actions/contactActions';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  dictionary: Dictionary;
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendContactMessage({ name, email, message });
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Votre nom</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Votre email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Votre message</Label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} />
      </div>
      <Button type="submit" disabled={isSending} className="w-full">
        {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  );
}
