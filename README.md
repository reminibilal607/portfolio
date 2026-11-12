# Portfolio de Billal REMINI

Site en français réalisé avec React, JavaScript, Tailwind CSS 4 et Vite. Thème sombre bleu/violet, navigation mobile, visualisation illustrative interactive, étude de cas, CV téléchargeable et formulaire mailto.

## Lancer en local

Prérequis : Node.js 20.19+ ou 22.12+ et npm.

Après extraction de l’archive, entrez dans le dossier `portfolio` :

```bash
cd portfolio
npm install
npm run dev
```

Ouvrez l’adresse indiquée par Vite, habituellement http://localhost:5173.

Pour compiler et consulter la version de production :

```bash
npm run build
npm run preview
```

Le dossier `dist/` contient les fichiers statiques à héberger.

## Organisation et personnalisation

- `src/data.js` centralise le profil, la recherche de stage, les coordonnées, les compétences, l’expérience, les projets, les formations et les langues.
- `src/main.jsx` contient les composants React et les interactions. La liste `projects` permet d’ajouter des projets vérifiés sans changer la structure de la page.
- `src/style.css` importe Tailwind CSS et définit les styles personnalisés, les adaptations responsive et le respect de `prefers-reduced-motion`.
- `public/CV_Billal_REMINI.pdf` est le CV fourni. Remplacez ce fichier pour mettre à jour le téléchargement, ou adaptez `profile.cv`.
- `index.html` contient le titre, la description et les références aux polices facultatives Google Fonts ; des polices système servent de repli.

## Formulaire de contact

Le formulaire vérifie les champs requis et le format de l’e-mail via la validation HTML, puis ouvre la messagerie du visiteur avec un brouillon prérempli à destination de `profile.email`. Le visiteur doit cliquer sur Envoyer dans sa messagerie. Le site ne transmet ni ne stocke les messages et n’affiche pas de confirmation d’envoi.

Une application de messagerie doit être configurée. Un lien e-mail et LinkedIn sont aussi accessibles. Pour ajouter un envoi direct ultérieurement, connectez un service d’envoi côté serveur avec validation et protection contre les abus ; ne placez pas de secret dans le code navigateur.

## Contenus

Les compétences en cours d’apprentissage sont séparées des compétences acquises. L’expérience et le mémoire décrivent une même étude menée chez Général Emballage. Aucun résultat chiffré ou profil GitHub n’est inventé. Le schéma d’ordonnancement et le nuage de points sont explicitement illustratifs. Le code du projet reste indiqué « Code à ajouter » tant qu’aucune URL n’est fournie.
