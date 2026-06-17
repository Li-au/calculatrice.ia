# Calculatrice

Une calculatrice web minimaliste avec interface intuitive et décomposition des calculs en étapes lisibles.

## Fonctionnalités

- **Interface épurée** : Champ central type barre de recherche sur fond blanc
- **Clavier animé** : Se déploie au clic/focus du champ, se ferme en cliquant à l'extérieur
- **Calculs classiques** : Addition (+), soustraction (−), multiplication (×), division (÷), pourcentages (%)
- **Bouton Expliquer** : Décompose le dernier calcul en étapes lisibles, générées localement et instantanément
- **Gestion d'erreurs** : Messages clairs pour les calculs invalides

## Utilisation

Ouvrez simplement `index.html` dans un navigateur. Aucune installation, aucune dépendance, aucun coût.

1. Cliquez sur le champ central pour ouvrir le clavier
2. Entrez votre calcul avec les chiffres et opérateurs
3. Appuyez sur `=` pour voir le résultat
4. Cliquez sur `Expliquer` pour voir la décomposition du calcul

## Technologies

- HTML5 / CSS3 / Vanilla JavaScript (pas de frameworks)
- Tests: Node.js natif (`node --test`)
- Aucune dépendance externe

## Exemples de calculs

- `200+10%` → Affiche: "200.1" + Explication: "10% = 0.1" puis "200 + 0.1 = 200.1"
- `2+3×4` → Affiche: "20" + Explication: "2 + 3 = 5" puis "5 × 4 = 20"
- `50%` → Affiche: "0.5" + Explication: "50% = 0.5"

## Structure du projet

```
calculatrice/
├── index.html           # Page principale
├── style.css            # Styles
├── script.js            # Logique DOM et interactions
├── src/
│   ├── evaluateExpression.js   # Fonction pure de calcul
│   └── explainExpression.js    # Fonction pure de décomposition
├── test/
│   ├── evaluateExpression.test.js
│   ├── explainExpression.test.js
│   └── integration.test.js
└── package.json         # Configuration npm
```

## Tests

```bash
npm test
```

Lance tous les tests avec Node.js natif.

## Licence

Ce projet est à usage libre.
