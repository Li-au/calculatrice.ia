# Requirements - MVP

## User Stories

1. En tant qu'utilisateur, j'arrive sur une page blanche épurée avec un champ central façon barre de recherche.
2. En tant qu'utilisateur, je clique/focus sur le champ et le clavier de calculatrice se déploie avec une transition douce.
3. En tant qu'utilisateur, je peux saisir un calcul (chiffres, + − × ÷, %) via les boutons et obtenir le résultat affiché dans le champ.
4. En tant qu'utilisateur, je peux effacer ma saisie (bouton C).
5. En tant qu'utilisateur, je peux cliquer sur "Expliquer" pour envoyer mon dernier calcul à Claude et recevoir une explication détaillée.
6. En tant qu'utilisateur, je vois un état de chargement clair pendant que la demande d'explication est en cours.
7. En tant qu'utilisateur, si une erreur survient (calcul invalide, échec d'appel API), je vois un message simple et non intrusif.

## Fonctionnalités clés (MVP)

- Champ central + déploiement animé du clavier
- Logique de calcul (parsing de l'expression, opérations de base, pourcentage)
- Bouton "Expliquer" relié à `/api/explain`
- Fonction serverless Vercel (`api/explain.js`) qui appelle l'API Claude avec la clé secrète côté serveur
- Gestion des états : saisie, résultat, chargement de l'explication, erreur

## Contraintes

- Aucune dépendance npm pour le front-end ; `fetch` natif pour l'appel à `/api/explain` côté client et pour l'appel à l'API Claude côté serveur
- La clé API Claude ne doit jamais être exposée au navigateur (uniquement en variable d'environnement Vercel)
- Style visuel minimaliste (fond blanc, pas de couleurs vives) conforme à `product-guidelines.md`
- Déploiement sur Vercel depuis un dépôt GitHub dédié

## Hors scope (MVP)

- Historique des calculs, calculatrice scientifique avancée, thèmes, comptes utilisateurs
