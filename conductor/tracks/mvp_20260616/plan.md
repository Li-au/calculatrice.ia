# Plan - MVP - Calculatrice IA jouable de bout en bout

Suit le workflow défini dans `conductor/workflow.md` (TDD : test rouge → implémentation → vert → commit par tâche, checkpoint de fin de phase).

Test runner : Node.js natif (`node --test`), aucune dépendance externe, conforme à `tech-stack.md`.

---

## Phase 1 — Squelette du projet et champ central `[checkpoint: 41f8ec2]`

- [x] **Tâche 1.1 :** Créer la structure de fichiers (`index.html`, `style.css`, `script.js`) avec le champ central affiché sur fond blanc `[dff78b8]`
- [x] **Tâche 1.2 :** Implémenter le déploiement animé du clavier de calculatrice au clic/focus du champ (et sa fermeture en cliquant à l'extérieur) `[e4fca66]`

### Phase Completion Checkpoint — Phase 1

---

## Phase 2 — Logique de calcul

- [x] **Tâche 2.1 :** Écrire les tests pour une fonction pure `evaluateExpression(expression)` (addition, soustraction, multiplication, division, pourcentage, gestion des expressions invalides) `[508dadf]`
- [x] **Tâche 2.2 :** Implémenter `evaluateExpression` `[508dadf]`
- [x] **Tâche 2.3 :** Brancher les boutons du clavier (chiffres, opérations, %, C, =) sur la saisie et l'affichage du résultat dans le champ `[bca23fd]`

### Phase Completion Checkpoint — Phase 2

---

## Phase 3 — Fonction serverless et bouton "Expliquer"

- [ ] **Tâche 3.1 :** Créer `api/explain.js` (fonction serverless Vercel) qui reçoit un calcul et appelle l'API Claude via `fetch` natif avec `ANTHROPIC_API_KEY`
- [ ] **Tâche 3.2 :** Brancher le bouton "Expliquer" sur `/api/explain`, avec état de chargement et affichage de l'explication
- [ ] **Tâche 3.3 :** Gérer les erreurs (calcul invalide avant envoi, échec de l'appel API) avec un message simple à l'utilisateur

### Phase Completion Checkpoint — Phase 3

---

## Phase 4 — Déploiement

- [ ] **Tâche 4.1 :** Vérifier que le front-end fonctionne en ouverture directe de `index.html` sans erreur console (hors appel à `/api/explain`, qui nécessite Vercel)
- [ ] **Tâche 4.2 :** Créer le dépôt GitHub dédié, pousser le code
- [ ] **Tâche 4.3 :** Connecter le dépôt à Vercel, configurer la variable d'environnement `ANTHROPIC_API_KEY`, déployer et vérifier l'accès via le lien public (y compris le bouton "Expliquer")

### Phase Completion Checkpoint — Phase 4
