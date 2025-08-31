# Projet : AlterLexis - Cahier des Charges Détaillé v3.0

## 0. Note au Développeur (Moi-même) : Philosophie du Document
Ce cahier des charges est ma feuille de route personnelle pour construire ce projet de A à Z en tant que développeur novice. Chaque fonctionnalité décrite ci-dessous est un objectif d'apprentissage.

**Règles d'Or :**
*   Toutes les étapes de configuration complexes qui ne peuvent être réalisées directement dans le code (ex: configuration de la console Firebase, déploiement, mise en place de webhooks, gestion des "custom claims") doivent être documentées avec des instructions pas à pas extrêmement détaillées (commandes terminal, guides cliquables pour la console Firebase).
*   Le projet ne doit contenir aucun placeholder ou fonction simulée, uniquement des implémentations réelles et fonctionnelles.

## 1. Concept & Vision
AlterLexis est une plateforme d'apprentissage de vocabulaire gamifiée, conçue pour un public adulte et motivé. Elle est construite sur une mécanique unique de "pendu inversé" pour forcer la mémorisation active. L'application est développée sur une architecture moderne, scalable et temps réel en utilisant Next.js 15 et l'écosystème Google Firebase.

Le cœur de l'application est une base de données de mots unique et pré-remplie, générée en amont par un script Python local appelant l'API Gemini 1.5 Flash. Le projet s'articule autour d'un modèle Freemium généreux, conçu pour permettre à tous de découvrir le cœur du jeu tout en valorisant les avantages de la création d'un compte et de l'abonnement Premium.

## 2. Technologies et Design System
*   **Design (UI/UX) : "Nuit d'Étude"**
    *   **Identité Visuelle :** Un thème sombre, élégant et immersif. L'ambiance est feutrée, concentrée et premium.
    *   **Palette de Couleurs :** Fond bleu nuit profond (`#192A41`), avec des accents "Or Chaleureux" (`#E5B359`) pour tous les éléments interactifs.
    *   **Logo :** Le logo "La Clé du Savoir" (fusion stylisée d'une clé et d'une plume).
    *   **Outils :** L'interface est construite avec Tailwind CSS et la bibliothèque de composants shadcn/ui.
*   **Framework Front-end :**
    *   Next.js 15+ (utilisant l'App Router). L'utilisation des Server Components est privilégiée.
*   **Back-end & Logique Métier :**
    *   Server Actions (Next.js) : Toute la logique métier est implémentée en tant que "Server Actions" sécurisées.
*   **Écosystème Firebase :**
    *   **Firebase Hosting :** Pour le déploiement du front-end Next.js.
    *   **Firebase Authentication :** Pour la gestion complète des utilisateurs.
    *   **Firestore :** Base de données NoSQL pour le stockage des profils utilisateurs, de la progression et de la banque de mots.
*   **Responsive Design ("Mobile-First")**
    *   **Priorité Absolue :** L'application est conçue en priorité pour les appareils mobiles.

## 3. Description Détaillée des Fonctionnalités

### 3.1. Architecture de la Banque de Mots
L'application repose sur une architecture de contenu pré-rempli stockée dans une seule collection Firestore.

*   **Processus de Génération (hors-ligne) :**
    *   Un script Python local est utilisé pour générer l'intégralité de la base de données. Il appelle l'API Gemini 1.5 Flash pour créer une liste de mots anglais sources, leur difficulté intrinsèque, et toutes leurs traductions.
    *   Le résultat est un fichier JSON unique, prêt à être importé.
*   **Structure sur Firestore :**
    *   Il n'y a qu'une seule collection pour tous les mots : `wordBank`.
    *   **Structure d'un Document Mot (ex: `wordBank/house`) :**
        *   **ID du Document:** Le mot anglais source, en minuscules.
        *   **Champs:**
            *   `difficulty` (string): Le niveau de difficulté ("Facile", "Moyen", etc.) assigné par l'IA.
            *   `definition_en` (string): La définition du mot en Anglais.
            *   `translations` (map): Un objet contenant les traductions pour chaque langue.

### 3.2. Mécanique de Jeu et Modèle Freemium
*   **Logique de Jeu (`getGameWords`) :**
    *   Au démarrage d'une partie, une Server Action cible la collection unique `wordBank`.
    *   Elle effectue une requête Firestore pour filtrer les mots en se basant sur le champ `difficulty`.
    *   Parmi les résultats, elle sélectionne 10 mots au hasard. Le processus est instantané.
*   **Principe du "Pendu Inversé" :**
    *   Le mot complet est affiché. À chaque réussite, un pourcentage croissant de lettres est masqué, jusqu'à la mémorisation complète.
*   **Scoring :**
    *   Chaque mot a une valeur de base fixe de 10 points, ajustée en fonction des erreurs.
*   **Niveaux de Difficulté et Accès (Modèle Freemium) :**
    *   **Utilisateur sans compte :**
        *   Accès illimité au niveau `Facile`.
        *   Les niveaux `Moyen`, `Difficile` et `Compétitif` sont visibles mais verrouillés, avec une incitation à créer un compte.
    *   **Utilisateur avec compte (gratuit) :**
        *   Accès illimité au niveau `Facile`.
        *   Accès limité à 3 parties par jour pour le niveau `Moyen`.
        *   Les niveaux `Difficile` et `Compétitif` sont visibles mais verrouillés, avec une incitation à passer Premium.
    *   **Utilisateur Premium :**
        *   Accès illimité à tous les niveaux (`Facile`, `Moyen`, `Difficile`, `Compétitif`).
*   **Gestion des Limites Journalières :**
    *   Dans le document de l'utilisateur sur Firestore, deux champs sont nécessaires : `dailyMediumPlays` (number) et `lastPlayDate` (string, ex: "2025-08-17").
    *   Avant de lancer une partie de niveau `Moyen`, une Server Action vérifie si la date actuelle est la même que `lastPlayDate`.
        *   Si la date est différente, elle réinitialise `dailyMediumPlays` à 3 et met à jour `lastPlayDate`.
        *   Si la date est la même, elle vérifie que `dailyMediumPlays` > 0 avant d'autoriser la partie et de décrémenter le compteur.

### 3.3. Authentification et Profil Utilisateur
*   **Inscription/Connexion :** Création de compte standard par e-mail et mot de passe.
*   **Onboarding :** Un court tutoriel explique la mécanique du jeu et les avantages de chaque statut : jouer en anonyme, créer un compte pour suivre ses stats et débloquer le niveau `Moyen`, et passer Premium pour un accès total.
*   **Persistance des Préférences :** La langue natale, la langue d'apprentissage et la dernière difficulté jouée sont sauvegardées dans le profil Firestore de l'utilisateur.
*   **Structure du Document Utilisateur (`users/{userId}`)**
    *   `email` (string): L'email de l'utilisateur (non modifiable).
    *   `displayName` (string): Le pseudo de l'utilisateur (modifiable).
    *   `createdAt` (timestamp): Date de création du compte.
    *   `premium_expires_at` (timestamp | null): Date d'expiration de l'abonnement.
    *   `isAdmin` (boolean): `true` si l'utilisateur est administrateur.
    *   `preferences` (map): `{ nativeLang: 'fr', targetLang: 'en', lastDifficulty: 'moyen' }`.
    *   `onboarding` (map): `{ hasCompletedTour: true }`.
    *   `stats` (map): `{ totalScore, wordsMastered, gamesPlayed, currentStreak, successRate, dailyMediumPlays, lastPlayDate }`.

### 3.4. Système Premium et Paiement
*   **Statut Premium :** Basé sur un champ `premium_expires_at` (timestamp) dans le document de l'utilisateur.
*   **Paiement :** Géré exclusivement via Gumroad.
*   **Activation par Clé :** Une Server Action `redeemPremiumKey` vérifie une clé et met à jour la date d'expiration de l'utilisateur.

### 3.5. Pages, Vues et Internationalisation
*   **Pages à créer :**
    *   **Page d'Accueil :** Configurateur de partie. Le bouton "Moyen" doit afficher le compteur de parties restantes pour les utilisateurs connectés.
    *   **Page de Jeu.**
    *   **Tableau de Bord Utilisateur** (détaillé ci-dessous).
    *   **Page de Profil Utilisateur** (détaillée ci-dessous).
    *   **Page de Classement :** Visible par tous. Affiche le Top 50 des joueurs avec des filtres pour la langue et la difficulté ("Difficile" et "Compétitif" uniquement).
    *   **Pages Statiques :** "Comment ça marche" (doit expliquer le nouveau modèle Freemium), "Contact", "Mentions Légales", "CGU", "Confidentialité".
*   **Internationalisation (i18n) :**
    *   L'interface est entièrement traduisible via des fichiers JSON dans `/src/locales`.
    *   **Langues au lancement :** Français (`fr.json` - fichier de référence), Anglais, Espagnol, Allemand, Italien, Portugais, Russe, Chinois Simplifié, Arabe.

## 4. Développement en Profondeur : Profil et Tableaux de Bord

### 4.1. Page de Profil Utilisateur (`/profil`)
Cette page est l'espace personnel de l'utilisateur, construite avec des composants `Card` de shadcn/ui.
*   **Carte "Informations Personnelles" :**
    *   Champ `displayName` (Input, modifiable).
    *   Champ `email` (Input, non modifiable).
    *   Bouton "Enregistrer" qui déclenche une Server Action pour mettre à jour le profil.
*   **Carte "Préférences d'Apprentissage" :**
    *   Sélecteur `nativeLang` (langue de l'interface et des définitions).
    *   Sélecteur `targetLang` (langue à apprendre).
    *   Bouton "Enregistrer" pour mettre à jour les préférences.
*   **Carte "Statut Premium" :**
    *   **Si non-premium :** Affiche un message "Passez Premium pour un accès illimité !" et un formulaire (Input + Button) pour activer une clé via la Server Action `redeemPremiumKey`.
    *   **Si premium :** Affiche "Statut : Premium" et la date d'expiration de `premium_expires_at`.
*   **Carte "Sécurité" :**
    *   Bouton "Changer le mot de passe" (déclenche l'e-mail de réinitialisation de Firebase).
    *   Section "Zone de Danger" avec un bouton "Supprimer mon compte" qui ouvre une modale de confirmation (Dialog).

### 4.2. Tableau de Bord Utilisateur (`/dashboard`)
C'est la page principale de l'utilisateur connecté, conçue pour être motivante et informative.
*   **En-tête :** Message d'accueil personnalisé ("Bonjour, [displayName] !").
*   **Grille de Statistiques Clés :**
    *   Une grille de 3-4 `Card` affichant les statistiques principales en temps réel (via `onSnapshot` de Firestore) : `totalScore`, `wordsMastered`, `gamesPlayed`, `currentStreak`.
*   **Compteur de Parties Journalières :**
    *   Une section très visible affichant : "Parties 'Moyen' restantes aujourd'hui : X / 3".
*   **Carte d'Activité (ActivityHeatmap) :**
    *   Un composant visuel affichant une grille de carrés représentant les 365 derniers jours.
    *   La couleur de chaque carré varie en fonction du nombre de parties jouées ce jour-là, encourageant la régularité.
*   **Collection de Badges :**
    *   Une section "Mes Badges" affichant les icônes des badges débloqués. Un Tooltip au survol donne le nom et la description du badge.
*   **Bannière d'Incitation Premium :**
    *   Si l'utilisateur n'est pas premium, une bannière attrayante est affichée en bas de page, l'invitant à découvrir les avantages de l'abonnement.

### 4.3. Panneau d'Administration (`/admin`)
Une interface sécurisée et fonctionnelle pour la gestion de l'application.
*   **Tableau de Bord Admin (KPIs) :**
    *   Une grille de `Card` affichant les métriques vitales : Nombre total d'utilisateurs, Nombre d'abonnés Premium actifs, Nombre de clés générées/utilisées, Revenus (via l'API Gumroad si disponible).
*   **Gestion des Utilisateurs :**
    *   Une `Table` paginée et consultable (par e-mail ou `displayName`) de tous les utilisateurs.
    *   Chaque ligne propose un menu d'actions (`DropdownMenu`) pour :
        *   Voir les détails complets de l'utilisateur.
        *   Attribuer/Modifier le statut Premium en définissant manuellement la date `premium_expires_at`.
*   **Génération de Clés Premium :**
    *   Un formulaire simple pour générer un ou plusieurs codes uniques avec une durée de validité définie (30 jours, 365 jours). La liste des clés générées s'affiche dans une `Textarea` pour être copiée.

## 5. Structure du Projet Attendue
Le code source doit être propre, commenté, et suivre une structure de projet Next.js 15 moderne :
*   `/src/app` : Routes, pages, layouts.
*   `/src/components` : Composants React réutilisables (shadcn/ui).
*   `/src/lib` : Utilitaires et configuration Firebase.
*   `/src/actions` : Toutes les Server Actions.
*   `/src/locales` : Fichiers de traduction JSON.
