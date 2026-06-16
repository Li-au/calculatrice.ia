# Spec - MVP - Calculatrice jouable de bout en bout

## Objectif

Livrer une calculatrice web minimaliste : un champ central façon barre de recherche qui se déploie en clavier de calculatrice au clic/focus, avec un calcul classique fonctionnel et un bouton "Expliquer" qui décompose le dernier calcul en étapes lisibles, généré localement en JavaScript (pas d'API, pas de coût).

## Extension de scope (2026-06-16) : retrait de l'API Claude

Décidé en cours de track : l'intégration de l'API Claude (fonction serverless Vercel) est retirée — l'utilisateur ne souhaite pas de coût d'API ni gérer de clé. Le bouton "Expliquer" est conservé mais réimplémenté comme une fonction pure `explainExpression(expression, result)` qui décompose le calcul en étapes (ex. gérer le pourcentage séparément, puis l'opération principale), sans aucun appel réseau.

## Portée fonctionnelle

Reprend les user stories de `conductor/requirements.md`, telles que révisées :

1. Page blanche épurée, champ central type barre de recherche
2. Déploiement animé du clavier de calculatrice au clic/focus du champ
3. Calcul classique (chiffres, + − × ÷, %), résultat affiché dans le champ
4. Effacement de la saisie (bouton C) et du dernier caractère (bouton ⌫)
5. Bouton "Expliquer" affichant une décomposition locale du dernier calcul
6. Affichage simple des erreurs (calcul invalide)

## Architecture technique

Conforme à `conductor/tech-stack.md` :
- `index.html` / `style.css` / `script.js` : front-end statique, sans dépendance
- `src/evaluateExpression.js` : logique de calcul (déjà implémentée)
- `src/explainExpression.js` : décomposition du calcul en étapes lisibles
- Aucun backend, aucune fonction serverless, aucune clé API

## Approche de test

La logique pure (`evaluateExpression`, `explainExpression`) est testée avec le test runner natif de Node.js (`node --test`), sans dépendance externe. Le rendu DOM (déploiement du clavier) est vérifié manuellement.

## Critères d'acceptation

- Ouvrir la page affiche un champ central sur fond blanc, sans clavier visible
- Cliquer/focus sur le champ déploie le clavier avec une transition
- Les calculs de base donnent le bon résultat
- Les boutons C et ⌫ fonctionnent
- Le bouton "Expliquer" affiche une décomposition claire du dernier calcul, instantanément (pas d'attente réseau)
- Le site est jouable en ouverture directe de `index.html`, sans dépendance ni coût
- Le site est accessible via un lien GitHub Pages public
