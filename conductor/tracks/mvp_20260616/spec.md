# Spec - MVP - Calculatrice IA jouable de bout en bout

## Objectif

Livrer une calculatrice web minimaliste : un champ central façon barre de recherche qui se déploie en clavier de calculatrice au clic/focus, avec un calcul classique fonctionnel et un bouton "Expliquer" qui envoie le calcul à l'API Claude (via une fonction serverless Vercel détenant la clé API) pour en obtenir une explication détaillée.

## Portée fonctionnelle

Reprend l'intégralité des user stories de `conductor/requirements.md` :

1. Page blanche épurée, champ central type barre de recherche
2. Déploiement animé du clavier de calculatrice au clic/focus du champ
3. Calcul classique (chiffres, + − × ÷, %), résultat affiché dans le champ
4. Effacement de la saisie (bouton C)
5. Bouton "Expliquer" envoyant le dernier calcul à `/api/explain`
6. État de chargement pendant l'attente de l'explication
7. Affichage simple des erreurs (calcul invalide, échec d'appel API)

## Architecture technique

Conforme à `conductor/tech-stack.md` :
- `index.html` / `style.css` / `script.js` : front-end statique, sans dépendance
- `api/explain.js` : fonction serverless Vercel (convention de fichier, aucune configuration de route nécessaire), appelle l'API Claude via `fetch` natif avec `ANTHROPIC_API_KEY` lue depuis les variables d'environnement Vercel
- Le front-end n'appelle jamais l'API Claude directement, uniquement `/api/explain`

## Approche de test

La logique pure (parsing/évaluation d'une expression de calculatrice, formatage du résultat) est extraite dans des modules testables séparément du code DOM/réseau, testés avec le test runner natif de Node.js (`node --test`), sans dépendance externe. La fonction serverless et le rendu DOM (déploiement du clavier, appels réseau) sont vérifiés manuellement, faute d'environnement de test adapté sans dépendance supplémentaire.

## Critères d'acceptation

- Ouvrir la page affiche un champ central sur fond blanc, sans clavier visible
- Cliquer/focus sur le champ déploie le clavier avec une transition
- Les calculs de base (addition, soustraction, multiplication, division, pourcentage) donnent le bon résultat
- Le bouton C efface la saisie en cours
- Le bouton "Expliquer" affiche un état de chargement puis l'explication renvoyée par Claude, sans erreur console
- La clé API n'apparaît à aucun moment dans le code front-end ni dans les requêtes réseau visibles côté navigateur
- Le site est accessible via un lien Vercel public
