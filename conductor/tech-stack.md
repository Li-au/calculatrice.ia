# Tech Stack

## Langages
- HTML5
- CSS3
- JavaScript (vanilla, sans framework) côté front-end
- JavaScript (Node.js) pour la fonction serverless

## Front-end
Pas de framework, pas de build. Un `index.html` + `style.css` + `script.js` chargés directement, comme les projets précédents.

## Backend (fonction serverless)
Hébergée sur Vercel, dans `api/explain.js` (convention de fichier de Vercel : tout fichier dans `api/` devient automatiquement un endpoint HTTP, sans framework ni configuration de routes nécessaire).

La fonction reçoit le calcul (expression + résultat) depuis le front-end, appelle l'API Claude directement via `fetch` natif (`https://api.anthropic.com/v1/messages`), avec la clé API lue depuis une variable d'environnement Vercel (`ANTHROPIC_API_KEY`, jamais commitée), et renvoie l'explication au front-end.

## Pas de dépendances
Aucun SDK ni package npm nécessaire : `fetch` natif suffit pour appeler l'API Claude depuis la fonction serverless. Un `package.json` minimal peut être ajouté uniquement si Vercel l'exige pour la configuration du runtime, sans dépendance déclarée.

## Hébergement
Vercel, connecté à un dépôt GitHub dédié (déploiement automatique à chaque push). Le front-end statique et la fonction serverless sont déployés ensemble depuis le même dépôt.

## Structure de fichiers prévue
```
calculatrice/
  index.html
  style.css
  script.js
  api/
    explain.js
  conductor/
```

## Sécurité
La clé API Claude n'est jamais exposée au navigateur : elle reste côté serveur (variable d'environnement Vercel), accessible uniquement par la fonction serverless. Le front-end appelle uniquement `/api/explain`, jamais l'API Claude directement.

## Justification
Stack volontairement minimaliste, cohérente avec les projets précédents (pas de framework), avec l'ajout strictement nécessaire d'une fonction serverless pour protéger la clé API — la seule pièce manquante pour intégrer une API d'IA sans backend complet à maintenir.
