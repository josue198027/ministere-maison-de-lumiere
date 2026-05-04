# Ministère Maison de Lumière

Site web officiel du Ministère Maison de Lumière, construit avec **Vite + React + TypeScript + Tailwind CSS + shadcn/ui**.

## Stack technique

- **Vite** comme bundler
- **React 18** + TypeScript
- **Tailwind CSS** pour le style (palette bleu marine + doré)
- **shadcn/ui** pour les composants UI
- **React Router** (mode HashRouter, parfait pour l'hébergement statique)
- **Supabase** pour le backend (formulaires de contact, témoignages, prière)

## Développement local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:8080`.

## Build de production

```bash
npm run build
npm run preview   # pour prévisualiser le build
```

Le résultat se trouve dans le dossier `dist/`.

---

## Hébergement sur GitHub Pages

### Étape 1 — Créer le repo GitHub

1. Allez sur [github.com/new](https://github.com/new)
2. Créez un repo, par exemple `ministere-maison-de-lumiere` (publique ou privé selon votre plan)
3. **Ne** cochez **pas** "Add a README" — votre projet en a déjà un

### Étape 2 — Pousser le code

Depuis le dossier du projet, en ligne de commande :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USER/ministere-maison-de-lumiere.git
git push -u origin main
```

Remplacez `VOTRE-USER` par votre nom d'utilisateur GitHub.

### Étape 3 — Activer GitHub Pages

1. Sur votre repo GitHub, allez dans **Settings** → **Pages** (menu de gauche)
2. Sous **Source**, sélectionnez **GitHub Actions**
3. C'est tout ! Vous n'avez rien d'autre à configurer.

### Étape 4 — Le déploiement automatique

Le workflow `.github/workflows/deploy.yml` se déclenche **à chaque push sur `main`**. Il :

1. Installe les dépendances
2. Récupère automatiquement le bon `base path` selon le nom du repo
3. Build le site
4. Le déploie sur GitHub Pages

Suivez le déploiement dans l'onglet **Actions** de votre repo. Au bout de 1 à 2 minutes, votre site sera en ligne à :

```
https://VOTRE-USER.github.io/ministere-maison-de-lumiere/
```

### Pour mettre à jour le site

Modifiez le code, puis :

```bash
git add .
git commit -m "Description de la modification"
git push
```

GitHub Actions rebuilde et redéploie tout seul.

---

## Structure du projet

```
src/
├── components/
│   ├── ui/              # Composants shadcn (Button, Card, etc.)
│   ├── Navigation.tsx   # Barre de navigation
│   └── Footer.tsx       # Pied de page
├── pages/
│   ├── Index.tsx        # Page d'accueil
│   ├── About.tsx        # À propos
│   ├── Schedule.tsx     # Culte & Horaires
│   ├── Sermons.tsx      # Prédications
│   ├── Testimonies.tsx  # Témoignages
│   ├── Ministries.tsx   # Ministères
│   ├── Prayer.tsx       # Demande de prière
│   ├── Contact.tsx      # Contact
│   ├── Donate.tsx       # Dons
│   └── ...
├── hooks/               # Hooks React personnalisés
├── lib/
│   ├── utils.ts         # Helpers (cn, asset)
│   └── ...
├── integrations/
│   └── supabase/        # Client Supabase
├── App.tsx              # Routeur principal
├── main.tsx             # Point d'entrée
└── index.css            # Variables CSS de la palette
```

## Personnalisation des couleurs

La palette est définie dans `src/index.css` via des variables CSS. Pour la modifier, éditez les valeurs HSL sous `:root`. Par défaut :

- **Primary** (bleu marine) : `hsl(215, 65%, 22%)`
- **Accent** (doré du logo) : `hsl(42, 70%, 50%)`

## Domaine personnalisé

Pour utiliser un domaine comme `maisondelumiere.ca` plutôt que l'URL `github.io` :

1. Dans **Settings** → **Pages**, ajoutez votre domaine sous "Custom domain"
2. Configurez les enregistrements DNS chez votre registrar selon les instructions GitHub
3. Créez un fichier `public/CNAME` contenant juste votre domaine
