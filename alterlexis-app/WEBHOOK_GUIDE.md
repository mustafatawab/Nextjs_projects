# Guide de Configuration du Webhook Gumroad pour AlterLexis

Ce guide détaille les étapes pour configurer le webhook Gumroad, permettant à AlterLexis de recevoir des notifications de vente et d'activer automatiquement le statut Premium pour vos utilisateurs.

Assurez-vous que votre fonction Cloud Functions `gumroadWebhook` est déjà déployée sur Firebase Hosting, comme décrit dans le `README.md` (Phase 2, Étape 3).

---

## 1. Récupérer l'URL de la Fonction Cloud Functions

1.  Ouvrez la [Console Firebase](https://console.firebase.google.com/).
2.  Dans le menu de gauche, allez dans la section `Build > Functions`.
3.  Cliquez sur l'onglet `Dashboard`.
4.  Recherchez la fonction nommée `gumroadWebhook`.
5.  Cliquez sur cette fonction pour ouvrir ses détails.
6.  Dans l'onglet `Trigger` (Déclencheur), vous trouverez l'**URL du déclencheur HTTP**. Copiez cette URL. Elle ressemblera à `https://your-region-your-project-id.cloudfunctions.net/gumroadWebhook`.

## 2. Définir le Secret du Webhook dans Firebase

Vous avez déjà dû définir cette variable lors de la configuration initiale de Firebase. Si ce n'est pas le cas, ou si vous devez la modifier :

1.  Choisissez une chaîne de caractères longue et aléatoire comme secret (ex: un UUID généré en ligne).
2.  Ouvrez votre terminal et assurez-vous d'être connecté à Firebase CLI (`firebase login`).
3.  Exécutez la commande suivante en remplaçant `YOUR_SECRET_HERE` par votre secret choisi :
    ```bash
    firebase functions:config:set gumroad.webhook_secret="YOUR_SECRET_HERE"
    ```
4.  Redéployez vos fonctions Cloud Functions pour que la nouvelle configuration soit prise en compte :
    ```bash
    firebase deploy --only functions
    ```

## 3. Configurer le Webhook dans Gumroad

1.  Connectez-vous à votre compte [Gumroad](https://app.gumroad.com/).
2.  Dans le menu de navigation de gauche, allez dans `Settings` (Paramètres).
3.  Cliquez sur l'onglet `Advanced` (Avancé).
4.  Faites défiler jusqu'à la section `Webhooks`.
5.  Dans le champ `Ping URL`, collez l'URL de votre fonction Cloud Functions `gumroadWebhook` que vous avez copiée à l'étape 1.
6.  Dans le champ `Secret Token`, collez le **même secret** que vous avez défini à l'étape 2 (`YOUR_SECRET_HERE`). C'est crucial pour la sécurité : Gumroad utilisera ce secret pour signer les requêtes, et votre fonction Firebase l'utilisera pour les vérifier.
7.  Assurez-vous que l'option `Send pings to this URL` est activée.
8.  Cliquez sur `Save Changes` (Enregistrer les modifications) en bas de la page.

## 4. Tester le Webhook (Recommandé)

Pour tester que le webhook fonctionne correctement :

1.  Depuis la section `Webhooks` de Gumroad, vous pouvez envoyer un "test ping" si cette option est disponible. Alternativement, effectuez un petit achat test de votre produit AlterLexis sur Gumroad.
2.  Dans la Console Firebase, allez dans `Build > Functions` et cliquez sur l'onglet `Logs` (Journaux) pour votre fonction `gumroadWebhook`.
3.  Vous devriez voir des entrées de journal indiquant que le webhook a été reçu et traité. Cherchez des messages comme `Received Gumroad event: sale` ou des erreurs si la configuration est incorrecte.

Le webhook Gumroad est maintenant entièrement configuré et votre application AlterLexis devrait activer automatiquement les abonnements Premium suite aux ventes.
