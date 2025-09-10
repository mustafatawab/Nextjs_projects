'use client';

import { Dictionary } from '@/types/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Crown, Key } from 'lucide-react';

interface AdminDashboardClientPageProps {
  dictionary: Dictionary;
  kpis: {
    totalUsers: number;
    activePremiumSubscribers: number;
    keysUsed: number;
  };
}

export default function AdminDashboardClientPage({
  dictionary,
  kpis,
}: AdminDashboardClientPageProps) {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gold-accent mb-10">Tableau de Bord Admin</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">Utilisateurs Totaux</CardTitle>
            <Users className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">{kpis.totalUsers}</div>
          </CardContent>
        </Card>
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">Abonnés Premium Actifs</CardTitle>
            <Crown className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">{kpis.activePremiumSubscribers}</div>
          </CardContent>
        </Card>
        <Card className="bg-card-blue border-gold-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-text">Clés Premium Utilisées</CardTitle>
            <Key className="h-5 w-5 text-gold-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-light-text">{kpis.keysUsed}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
