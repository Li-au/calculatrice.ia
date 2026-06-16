# Product Guidelines

## Style visuel
Minimaliste, épuré, façon barre de recherche (Google-like). Fond entièrement blanc, sans décor ni texture. Un seul élément visible par défaut : le champ central. Aucune couleur vive ni dégradé — tons neutres (noir/gris) avec, au maximum, une couleur d'accent discrète pour le bouton "Expliquer".

## Champ central et déploiement
Le champ central ressemble à une barre de recherche (large, coins arrondis, légère ombre). Au clic/focus, le clavier de la calculatrice se déploie juste en dessous avec une transition douce (pas d'apparition brutale). Le champ affiche la saisie/le résultat du calcul en cours.

## Clavier de calculatrice
Boutons numériques (0-9), opérations de base (+ − × ÷), pourcentage, effacer (C), égal (=). Disposition en grille classique de calculatrice, boutons larges et lisibles. Pas de fioritures : couleurs plates, contrastes simples.

## Bouton "Expliquer"
Visuellement distinct (couleur d'accent), positionné à proximité du clavier une fois déployé. Au clic, affiche l'explication de Claude dans une zone de texte sous le clavier (état de chargement clair pendant l'attente de la réponse).

## Principes UX
- Un seul geste pour démarrer (clic/focus sur le champ)
- Feedback visuel immédiat sur chaque appui de bouton
- Pas de texte superflu, pas d'écran d'accueil séparé — la barre centrale est à la fois l'accueil et l'outil
- Erreurs (calcul invalide, échec d'appel API) affichées de façon simple et non intrusive
