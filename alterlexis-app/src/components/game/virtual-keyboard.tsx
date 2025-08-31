'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  targetLang: 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ar';
}

const KEY_LAYOUTS = {
    en: "azertyuiopqsdfghjklmwxcvbn".split(''),
    fr: "azertyuiopqsdfghjklmùwxcvbn".split(''),
    es: "qwertyuiopasdfghjklñzxcvbn".split(''),
    de: "qwertzuiopüasdfghjklöäyxcvbn".split(''),
    it: "qwertyuiopèéasdfghjklòàùzxcvbn".split(''),
    pt: "qwertyuiopasdfghjklçzxcvbn".split(''),
    ru: "йцукенгшщзхъфывапролджэячсмитьбю".split(''),
    zh: [], // Not applicable for standard keyboard
    ar: "ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظ".split('')
};

export function VirtualKeyboard({ onKeyPress, targetLang }: VirtualKeyboardProps) {
  const layout = KEY_LAYOUTS[targetLang] || KEY_LAYOUTS.en;

  const handleKeyClick = (key: string) => {
    onKeyPress(key);
  };

  const handleBackspace = () => {
    onKeyPress('Backspace');
  };

  if (layout.length === 0) return null; // Don't show keyboard for unsupported layouts

  return (
    <div className="w-full bg-card-blue/50 p-4 rounded-lg border-t-2 border-gold-accent/20">
      <div className="grid grid-cols-10 gap-2">
        {layout.map((key) => (
          <Button
            key={key}
            onClick={() => handleKeyClick(key)}
            variant="outline"
            className="h-12 text-lg font-semibold"
          >
            {key}
          </Button>
        ))}
        <Button
          onClick={handleBackspace}
          variant="destructive"
          className="col-span-2 h-12"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
