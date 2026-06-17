# 🧮 Calculatrice IA

Une calculatrice web moderne avec interface intuitive, mode scientifique et explication détaillée des calculs en étapes.

**Démo en ligne** : https://li-au.github.io/calculatrice.ia/

## ✨ Fonctionnalités principales

### Mode Normal
- **Interface épurée** : Champ central type barre de recherche sur fond blanc
- **Clavier animé** : Se déploie au clic/focus du champ avec transition fluide
- **Opérations classiques** : Addition (+), soustraction (−), multiplication (×), division (÷)
- **Pourcentages** : Calcul de pourcentages intégrés
- **Nombres décimaux** : Support complet des décimales
- **Touches pratiques** : Clear (C), Backspace (⌫)

### Mode Scientifique 🔬
Basculez en mode scientifique avec le bouton **Sci** :
- **Fonctions trigonométriques** : sin, cos, tan (en radians)
- **Logarithmes** : log (base 10), ln (logarithme naturel)
- **Racine carrée** : √
- **Exposants** : ^ (puissance)
- **Constantes** : π

### Bouton Expliquer 📖
Décompose instantanément chaque calcul en étapes lisibles :
- Explication en temps réel
- Généré localement (aucun appel API)
- Montre chaque opération pas à pas
- Gestion complète des erreurs

## 🚀 Démarrage rapide

### Utilisation en ligne
Ouvrez simplement : https://li-au.github.io/calculatrice.ia/

### Utilisation locale
```bash
# Clonez le dépôt
git clone https://github.com/Li-au/calculatrice.ia.git
cd calculatrice.ia

# Ouvrez index.html dans votre navigateur
# Ou lancez un serveur local
python -m http.server 8000
# Puis accédez à http://localhost:8000
```

## 📋 Guide d'utilisation

1. **Ouvrir le clavier** : Cliquez sur le champ de saisie
2. **Entrer une expression** : Utilisez les boutons du clavier ou votre clavier
3. **Calculer** : Appuyez sur le bouton bleu `=`
4. **Expliquer** : Cliquez sur le bouton `Expliquer` pour voir les étapes
5. **Mode scientifique** : Cliquez sur `Sci` pour accéder aux fonctions avancées

## 📐 Exemples de calculs

### Mode normal
```
200 + 10%  → 200.1
  Explication: 10% = 0.1
               200 + 0.1 = 200.1

2 + 3 × 4  → 20 (évaluation gauche à droite)
  Explication: 2 + 3 = 5
               5 × 4 = 20

50%        → 0.5
  Explication: 50% = 0.5
```

### Mode scientifique
```
sin(π/2)    → 1
log(100)    → 2
√16         → 4
2^10        → 1024
```

## 🏗️ Architecture technique

### Stack technologique
- **Frontend** : HTML5, CSS3, Vanilla JavaScript
- **Tests** : Node.js natif (`node --test`)
- **Sans dépendances** : Pas de frameworks, jQuery, ou libraries externes

### Structure des fichiers

```
calculatrice/
├── index.html                          # Page principale
├── style.css                           # Styles CSS complets
├── script.js                           # Logique interactif du DOM
├── README.md                           # Documentation
│
├── src/
│   ├── evaluateExpression.js          # Calcul des expressions (fonction pure)
│   ├── explainExpression.js           # Décomposition des calculs (fonction pure)
│   └── scientificFunctions.js         # Fonctions mathématiques scientifiques
│
├── test/
│   ├── evaluateExpression.test.js     # Tests de la logique de calcul
│   ├── explainExpression.test.js      # Tests de la décomposition
│   ├── calculator.test.js             # Tests de workflow utilisateur
│   ├── dom.test.js                    # Tests de structure DOM
│   └── interaction.test.js            # Tests d'interaction avec le DOM
│
├── package.json                        # Configuration npm
└── .gitignore                          # Fichiers ignorés par Git
```

### Fonctionnalités techniques
- **Fonctions pures** : Logique de calcul sans état
- **Gestion des erreurs** : Validation et messages clairs
- **Tests complets** : 58 tests (logique, DOM, interactions)
- **Responsive** : Fonctionne sur tous les écrans
- **Accessible** : ARIA labels, clavier navigable

## ✅ Tests

Le projet inclut **58 tests** couvrant :
- Opérations arithmétiques
- Gestion des pourcentages
- Calculs scientifiques
- Interactions DOM
- Basculement de mode
- Gestion des erreurs

Lancez les tests :
```bash
npm test
```

Résultat attendu :
```
✓ 58 tests passants
✓ 0 tests échoués
```

## 🎨 Interface

### Mode normal (par défaut)
```
┌─────────────────┐
│  Calculer...    │  ← Affichage
├─────────────────┤
│  7  8  9  ÷    │
│  4  5  6  ×    │
│  1  2  3  −    │
│  0  .  =  +    │
│  C  ⌫  %  Exp  │
├─────────────────┤
│ Sci             │  ← Mode scientifique (gauche)
│ Explications... │  ← Résultats expliqués
└─────────────────┘
```

### Mode scientifique
```
Sci boutons additionnels :
sin  cos  tan  log  ln  √  ^  π
```

## 🔧 Développement

### Ajouter une nouvelle opération

1. Ajouter dans `evaluateExpression.js` :
```javascript
case '⊕':  // Nouvel opérateur
  return left ⊕ right;
```

2. Ajouter dans `explainExpression.js` :
```javascript
case '⊕':
  return Math.yourOperation(left, right);
```

3. Ajouter les tests

4. Ajouter le bouton dans `index.html`

## 📱 Compatibilité

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile (iOS / Android)

## 📄 Licence

Ce projet est à usage libre.

## 👤 Auteur

Créé par Li-au - https://github.com/Li-au

---

**Prêt à calculer ?** Ouvrez https://li-au.github.io/calculatrice.ia/ 🚀
