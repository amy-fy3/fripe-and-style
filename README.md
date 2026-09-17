# Fripe & Style

Et si donner une seconde vie à vos vêtements devenait un plaisir ? Fripe and Style est une vitrine en ligne développée avec Angular, pensée pour dénicher des pièces uniques, seconde main ou friperie, avec la simplicité d'un vrai dressing digital.

## Thème

Catalogue de vêtements de seconde main (friperie), avec fiches produits détaillées et formulaire de contact.

## Équipe

- **Amy Faye** — Structure du projet, catalogue (page d'accueil), page détail produit, design CSS
- **Djiby Diop** — Page À propos, page Contact (formulaire), design CSS

Projet réalisé dans le cadre du cours de Technologie Web 3 — Licence 1 Informatique.

## Fonctionnalités

- Page d'accueil : catalogue de vêtements généré dynamiquement à partir d'un tableau de données
- Page détail produit : affichage complet d'un article via son identifiant dans l'URL (`/produit/:id`)
- Page À propos : présentation du site et de l'équipe
- Page Contact : formulaire avec binding bidirectionnel Angular (`ngModel`)
- Navigation commune (navbar) et pied de page (footer) sur toutes les pages

## Lancer le projet en local

\`\`\`bash
npm install
ng serve
\`\`\`

Puis ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

## Technologies

- Angular (dernière version stable)
- TypeScript
- CSS