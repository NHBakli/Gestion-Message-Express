# Projet : Système de Gestion de Messages

Ce projet est une application web simple permettant de poster et d'afficher des messages. Il est construit avec **Express.js** pour le backend et **Bootstrap** pour le frontend, offrant une interface utilisateur responsive et moderne.

---

## Fonctionnalités

- **Ajout de messages** :
    - Chaque message comprend un titre, un contenu, et un auteur.
    - Validation des champs pour garantir la qualité des données.
- **Affichage des messages** :
    - Les messages sont affichés sous forme de cartes avec leur titre, contenu, et auteur.
- **Gestion des erreurs** :
    - Les erreurs de validation sont affichées clairement.
    - Une page d'erreur s'affiche si une route invalide est accédée.
- **Stockage persistant** :
    - Les messages sont stockés dans un fichier JSON.

---

## Technologies utilisées

### Backend
- **Node.js** avec **Express.js** :
    - Gestion des routes
    - Middleware pour la validation des données
    - Gestion des erreurs

### Frontend
- **Bootstrap 5** :
    - Conception des cartes et du formulaire
    - Mise en page responsive

---

## Prérequis

- Node.js (v14 ou supérieur)
- NPM (v6 ou supérieur)

---

## Installation

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/votre-utilisateur/projet-messages.git
   cd projet-messages
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Créer le dossier de données** :
    - Créez un dossier `data` à la racine du projet.
    - Ajoutez un fichier `messages.json` dans ce dossier et initialisez-le avec un tableau vide :
      ```json
      []
      ```

4. **Lancer l'application** :
   ```bash
   npm start
   ```
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```plaintext
projet-messages/
├── data/                  # Dossier contenant les fichiers JSON pour stocker les données
│   └── messages.json      # Fichier de stockage des messages
├── public/                # Contient les fichiers statiques (CSS, JS)
├── routes/                # Contient les routes Express.js
├── views/                 # Contient les templates EJS
│   ├── layouts.ejs        # Layout principal
│   ├── index.ejs          # Page principale
│   └── erreur.ejs         # Page d'erreur
├── app.js                 # Fichier principal de l'application
├── package.json           # Gestion des dépendances
└── README.md              # Documentation du projet
```

---

## Utilisation

### Affichage des messages
- Accédez à [http://localhost:3000](http://localhost:3000) pour afficher les messages existants.

### Ajouter un message
1. Remplissez le formulaire avec un titre, un message, et un auteur.
2. Cliquez sur "Envoyer".
3. Le message sera ajouté à la liste et affiché sur la page principale.

### Gestion des erreurs
- Si un champ est incorrectement rempli (ex : titre trop court), un message d'erreur s'affiche.
- Si vous accédez à une route inexistante, une page d'erreur personnalisée est affichée.

---

## Améliorations possibles

- Ajout d'une base de données (ex : MongoDB) pour un stockage plus robuste.
- Mise en place d'une pagination pour gérer un grand nombre de messages.
- Ajout d'un système d'authentification pour gérer les auteurs.

---

## Auteur

Projet réalisé par **NHBakli**.

---

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).