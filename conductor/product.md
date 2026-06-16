# Initial Concept

Créer une calculatrice web : une interface de calculatrice classique (boutons numériques, opérations de base), avec un bouton supplémentaire "Expliquer" qui envoie le calcul à l'API Claude pour en obtenir une explication détaillée. Le site (front-end statique) et une fonction serverless (qui appelle l'API Claude avec une clé secrète côté serveur) sont hébergés ensemble sur Vercel, connecté à un dépôt GitHub dédié. Le but est d'apprendre à intégrer une API d'IA dans un projet web avec Claude Code.

# Product Guide

## Vision
Une calculatrice minimaliste façon "barre de recherche" : un fond blanc épuré avec un champ central, qui se déploie en clavier de calculatrice complet au clic/focus. Une option permet d'envoyer le calcul à Claude pour en obtenir une explication détaillée, pas juste le résultat.

## Public cible
- Le développeur lui-même (apprentissage de l'intégration d'une API IA et du déploiement serverless)
- Toute personne avec un navigateur et un lien

## Objectifs du MVP
1. Une page blanche, épurée, avec un champ central façon barre de recherche
2. Au clic/focus sur le champ, déploiement animé du clavier de calculatrice (chiffres, opérations de base : + − × ÷, %, effacer, égal)
3. Calcul classique fonctionnel (résultat affiché dans le champ)
4. Un bouton "Expliquer" qui envoie le dernier calcul à l'API Claude (via une fonction serverless Vercel détenant la clé API) et affiche l'explication retournée
5. Déploiement sur Vercel, connecté à un dépôt GitHub dédié

## Hors scope (pour l'instant)
- Historique des calculs persistant
- Calculatrice scientifique avancée (trigonométrie, puissances, etc.)
- Plusieurs thèmes/couleurs (un seul style épuré pour le MVP)
- Comptes utilisateurs / sauvegarde

## Critère de succès
La page se charge sur un simple lien Vercel, le champ central déploie la calculatrice au clic, les calculs de base fonctionnent, et le bouton "Expliquer" renvoie une explication de Claude sans exposer la clé API au navigateur.
