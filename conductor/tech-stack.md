# Tech Stack

## Langages
- HTML5
- CSS3
- JavaScript (vanilla, sans framework)

## Front-end
Pas de framework, pas de build. Un `index.html` + `style.css` + `script.js` chargés directement, comme les projets précédents.

## Explication des calculs
Générée entièrement en local en JavaScript (aucun appel réseau, aucune API, aucun coût) : une fonction pure décompose l'expression en étapes lisibles (ex. "200 + 10% → 10% de 200 = 20, donc 200 + 20 = 220").

## Pas de dépendances, pas de backend
Aucun SDK, aucun package npm, aucune fonction serverless. Le site est 100% statique.

## Hébergement
GitHub Pages, depuis un dépôt dédié.

## Structure de fichiers prévue
```
calculatrice/
  index.html
  style.css
  script.js
  src/
    evaluateExpression.js
    explainExpression.js
  test/
  conductor/
```

## Tests
La logique pure (`evaluateExpression`, `explainExpression`) est testée avec le test runner natif de Node.js (`node --test`), sans dépendance externe.

## Justification
Stack volontairement minimaliste, cohérente avec les projets précédents (pas de framework, pas de build, pas de backend). L'intégration d'une API IA payante a été écartée par choix de l'utilisateur (vouloir un projet entièrement gratuit) ; la fonctionnalité "Expliquer" est conservée mais réimplémentée comme une décomposition algorithmique locale.
