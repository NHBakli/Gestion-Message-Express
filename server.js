// Les imports de modules Node
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// le module de routage
const router = require('./routes');

// Les controleurs
const MessagesController = require('./controllers/messagesController');
const messagesController = new MessagesController('messages');

// Création de l'application Node.js
const app = express();
const port = 3000;

// Le  moteur de templates
app.set('view engine', 'ejs' );
app.set('views', path.join(__dirname, './views'));

app.use(bodyParser.urlencoded({extended: true}));

// Initialisations et lecture de la configuration de l'application
const dataFolder = './data/';
const configFile = path.join(__dirname, dataFolder + 'config.json');

const messageFile = path.join(__dirname, dataFolder + 'messages.json');

fs.readFile(configFile && messageFile, 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
        app.locals.siteName = "[ nom du site ]";
        app.locals.messages = "[messages]";
    }else{
        app.locals.siteName = JSON.parse(data).site_name;
        app.locals.messages = JSON.parse(data).messages;

    }
});

// Définition et appel du router
app.use('/', router({messagesController}));

// Lancement du serveur
app.listen(port, () => {
    console.log(`Application démarrée sur http://localhost:${port}`)
});