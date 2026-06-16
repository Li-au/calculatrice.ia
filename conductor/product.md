# Initial Concept

Créer une calculatrice web : une interface de calculatrice classique (boutons numériques, opérations de base), avec un bouton supplémentaire "Expliquer" qui décompose le calcul étape par étape, généré localement en JavaScript (gratuit, sans clé API ni serveur). Le site est 100% statique (HTML/CSS/JS vanilla), hébergé sur GitHub Pages depuis un dépôt dédié.

# Product Guide

## Vision
Une calculatrice minimaliste façon "barre de recherche" : un fond blanc épuré avec un champ central, qui se déploie en clavier de calculatrice complet au clic/focus. Un bouton "Expliquer" décompose le calcul en étapes lisibles, sans aucun appel réseau ni coût.

## Public cible
- Le développeur lui-même (apprentissage)
- Toute personne avec un navigateur et un lien

## Objectifs du MVP
1. Une page blanche, épurée, avec un champ central façon barre de recherche
2. Au clic/focus sur le champ, déploiement animé du clavier de calculatrice (chiffres, opérations de base : + − × ÷, %, effacer, égal)
3. Calcul classique fonctionnel (résultat affiché dans le champ)
4. Un bouton "Expliquer" qui décompose le dernier calcul en étapes (généré localement, sans API ni réseau)
5. Déploiement sur GitHub Pages, depuis un dépôt dédié

## Hors scope (pour l'instant)
- Explication via une IA / API externe (retiré : coût et complexité non désirés)
- Historique des calculs persistant
- Calculatrice scientifique avancée (trigonométrie, puissances, etc.)
- Plusieurs thèmes/couleurs (un seul style épuré pour le MVP)
- Comptes utilisateurs / sauvegarde

## Critère de succès
La page se charge sur un simple lien GitHub Pages (ou en local via `index.html`), le champ central déploie la calculatrice au clic, les calculs de base fonctionnent, et le bouton "Expliquer" affiche une décomposition claire du calcul, sans dépendance ni coût.
