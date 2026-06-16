# Plan - MVP - Calculatrice jouable de bout en bout

Suit le workflow défini dans `conductor/workflow.md` (TDD : test rouge → implémentation → vert → commit par tâche, checkpoint de fin de phase).

Test runner : Node.js natif (`node --test`), aucune dépendance externe, conforme à `tech-stack.md`.

---

## Phase 1 — Squelette du projet et champ central `[checkpoint: 41f8ec2]`

- [x] **Tâche 1.1 :** Créer la structure de fichiers (`index.html`, `style.css`, `script.js`) avec le champ central affiché sur fond blanc `[dff78b8]`
- [x] **Tâche 1.2 :** Implémenter le déploiement animé du clavier de calculatrice au clic/focus du champ (et sa fermeture en cliquant à l'extérieur) `[e4fca66]`

### Phase Completion Checkpoint — Phase 1

---

## Phase 2 — Logique de calcul `[checkpoint: 0cb0753]`

- [x] **Tâche 2.1 :** Écrire les tests pour une fonction pure `evaluateExpression(expression)` (addition, soustraction, multiplication, division, pourcentage, gestion des expressions invalides) `[508dadf]`
- [x] **Tâche 2.2 :** Implémenter `evaluateExpression` `[508dadf]`
- [x] **Tâche 2.3 :** Brancher les boutons du clavier (chiffres, opérations, %, C, =) sur la saisie et l'affichage du résultat dans le champ `[bca23fd]`

### Phase Completion Checkpoint — Phase 2

---

## Phase 3 — Bouton "Expliquer" (décomposition locale, gratuite)

Extension de scope décidée le 2026-06-16 (voir `spec.md`) : remplace l'intégration API Claude initialement prévue par une décomposition algorithmique locale, sans coût ni backend.

- [x] **Tâche 3.1 :** Écrire les tests pour une fonction pure `explainExpression(expression, result)` qui décompose le calcul en étapes lisibles `[5a6547f]`
- [x] **Tâche 3.2 :** Implémenter `explainExpression` `[5a6547f]`
- [~] **Tâche 3.3 :** Brancher le bouton "Expliquer" sur `explainExpression` et afficher la décomposition sous le clavier
- [ ] **Tâche 3.4 :** Gérer le cas d'un calcul invalide ou absent avant d'expliquer (message simple à l'utilisateur)

### Phase Completion Checkpoint — Phase 3

---

## Phase 4 — Déploiement

- [ ] **Tâche 4.1 :** Vérifier que le site fonctionne en ouverture directe de `index.html` sans erreur console
- [ ] **Tâche 4.2 :** Créer le dépôt GitHub dédié, pousser le code
- [ ] **Tâche 4.3 :** Activer GitHub Pages et vérifier l'accès via le lien public

### Phase Completion Checkpoint — Phase 4
