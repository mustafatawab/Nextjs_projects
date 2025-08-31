"use client";

import { Dictionary, User, Badge } from "@/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import OnboardingTour from "@/components/layout/onboarding-tour";
import { Award, BarChart2, Bot, Target } from "lucide-react";
import Link from "next/link";
import { setAdminClaim } from "@/actions/adminActions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/router";
// --- Activity Heatmap Component ---
const ActivityHeatmap = ({
  data,
}: {
  data: { date: string; count: number }[];
}) => {
  const squares = Array.from({ length: 30 }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (364 - index));
    const dateString = date.toISOString().split("T")[0];
    const dayData = data.find((d) => d.date === dateString);
    const count = dayData ? dayData.count : 0;

    let colorClass = "bg-card-blue";
    if (count > 0 && count <= 2) colorClass = "bg-gold-accent/30";
    else if (count > 2 && count <= 5) colorClass = "bg-gold-accent/60";
    else if (count > 5) colorClass = "bg-gold-accent";

    return (
      <TooltipProvider key={index}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`w-3 h-3 rounded-sm border border-white/10 ${colorClass}`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {count} partie(s) le {date.toLocaleDateString()}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  });

  return <div className="grid grid-cols-52 gap-1">{squares}</div>;
};

interface DashboardClientPageProps {
  dictionary: Dictionary;
  user: User;
}

export default function DashboardClientPage({
  user,
  dictionary,
}: DashboardClientPageProps) {
  const stats = user.stats || {
    totalScore: 0,
    wordsMastered: 0,
    gamesPlayed: 0,
    currentStreak: 0,
    dailyMediumPlays: 3,
    lastPlayDate: "",
  };
  const badges = user.badges || [];
  const onboarding = user.onboarding || { hasCompletedTour: false };

  const [showOnboarding, setShowOnboarding] = useState(
    !onboarding.hasCompletedTour
  );
  const activityData: { date: string; count: number }[] = [];
  const isPremium =
    user.premium_expires_at && user.premium_expires_at > Date.now();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* <Button
        size="sm"
        variant={user.isAdmin ? "destructive" : "default"}
        onClick={async () => {
          try {
            const res = await setAdminClaim(
              "eite6T2TJVQdNJCuplrJED2tzcC3",
              true
            );
            toast({ title: res.message });
            useRouter().push(`/en/admin`)
          } catch (error: any) {
            toast({
              title: "Error",
              description: error.message,
              variant: "destructive",
            });
          }
        }}
      >
        {user.isAdmin ? "Remove Admin" : "Make Admin"}
      </Button> */}
      {showOnboarding && (
        <OnboardingTour
          onFinish={() => setShowOnboarding(false)}
          dictionary={dictionary}
        />
      )}
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Bonjour,{" "}
            <span className="text-gold-accent">
              {user.displayName || user.email}
            </span>{" "}
            !
          </h1>
          <p className="text-muted-text mb-10">
            Voici un aperçu de votre progression.
          </p>
        </div>
        {user.isAdmin && (
          <Link href={"/en/admin"}>
            <Button variant={"outline"}>
              Admin {dictionary.common.dashboard}
            </Button>
          </Link>
        )}
      </div>
      {!isPremium && (
        <Card className="bg-gold-accent/10 border-gold-accent/30 mb-10 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-gold-accent">Accès Journalier</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              Parties &apos;Moyen&apos; restantes : {stats.dailyMediumPlays} / 3
            </p>
            <Button asChild className="mt-4">
              <Link href="/premium">Devenir Premium</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10 animate-fade-in-up">
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">
              Score Total
            </CardTitle>
            <Award className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">
              {stats.totalScore}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">
              Mots Maîtrisés
            </CardTitle>
            <Target className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">
              {stats.wordsMastered}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">
              Parties Jouées
            </CardTitle>
            <Bot className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">
              {stats.gamesPlayed}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">
              Série Actuelle
            </CardTitle>
            <BarChart2 className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">
              {stats.currentStreak} jours
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Card className="bg-card-blue border-gold-accent/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-gold-accent">Mes Badges</CardTitle>
          </CardHeader>
          <CardContent>
            {badges.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {badges.map((badge) => (
                  <TooltipProvider key={badge.id}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className={`w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center border-2 ${
                            badge.id === "GOLDEN_KEY_HOLDER"
                              ? "border-gold-accent"
                              : "border-gold-accent/30"
                          }`}
                        >
                          <span className="text-3xl">
                            {badge.id === "GOLDEN_KEY_HOLDER" ? "🔑" : "🏆"}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-bold">{badge.name}</p>
                        <p>{badge.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            ) : (
              <p className="text-muted-text">
                Aucun badge débloqué pour le moment.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card-blue border-gold-accent/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-gold-accent">
              Activité Annuelle
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center p-4">
            <ActivityHeatmap data={activityData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
