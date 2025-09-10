'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Dictionary } from '@/types/types';
import { updateUserOnboarding } from '@/actions/userActions';

interface OnboardingTourProps {
  dictionary: Dictionary;
  onFinish: () => void;
}

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Jouez en illimité en mode Facile",
    description: "Découvrez le cœur du jeu sans aucune barrière.",
  },
  {
    title: "Créez un compte pour progresser",
    description: "Sauvegardez vos statistiques et débloquez 3 parties gratuites en niveau 'Moyen' chaque jour.",
  },
  {
    title: "Soutenez le projet pour un accès total",
    description: "Devenez Premium pour un accès illimité à tous les niveaux.",
  },
];

export default function OnboardingTour({
  onFinish,
}: OnboardingTourProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };
  
  const handleFinish = async () => {
    try {
      await updateUserOnboarding(true); 
    } catch (error) {
      console.error("Failed to update onboarding status:", error);
    }
    onFinish();
  };


  const step = steps[currentStep];

  return (
    <Dialog open={true} onOpenChange={handleFinish}>
      <DialogContent className="bg-card-blue border-gold-accent/20">
        <DialogHeader>
          <DialogTitle className="text-gold-accent text-2xl">{step.title}</DialogTitle>
          <DialogDescription className="text-muted-text pt-4">
            {step.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
            {steps.map((_, index) => (
                <div key={index} className={`h-2 w-2 rounded-full mx-1 ${currentStep === index ? 'bg-gold-accent' : 'bg-gold-accent/30'}`}></div>
            ))}
        </div>
        <DialogFooter className="mt-6">
          <Button onClick={handleNext} className="w-full">
            {currentStep < steps.length - 1 ? "Suivant" : "Commencer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
