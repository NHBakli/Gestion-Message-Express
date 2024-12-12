const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

module.exports = (params) => {

    const { messagesController } = params;

    router.post(
        '/',
        [
            check('title')
                .trim()
                .isLength({ min: 3 })
                .escape()
                .withMessage('Un titre de plus de 3 caractères est obligatoire'),
            check('message')
                .trim()
                .isLength({ min: 5 })
                .escape()
                .withMessage('Un message de plus de 5 caractères est obligatoire'),
            check('author')
                .trim()
                .isLength({ min: 3 })
                .escape()
                .withMessage('Un nom de plus de 3 caractères est obligatoire'),
        ],
        async (req, res) => {
            const erreurs = validationResult(req);
            if (!erreurs.isEmpty()) {
                return res.status(400).json({ erreurs: erreurs.array() });
            }

            const id = Math.floor(Math.random() * 1000);
            const { title, message, author } = req.body;

            try {
                await messagesController.addMessage(id, title, message, author);
                return res.redirect('/');
            } catch (error) {
                console.error('Erreur lors de l’ajout du message:', error);
                return res.status(500).json({ error: "Une erreur s'est produite lors de l'ajout du message" });
            }
        }
    );



    router.get('/', async (requete, reponse) => {
        const messages = await messagesController.getMessage();
        try {
            reponse.render('layouts', { pageTitle: 'Messages', messages,  page: 'index'});
        } catch (error) {
            console.error("Erreur routeur " + error);
            reponse.render('layouts', { pageTitle: "Une erreur s'est produite", page: 'erreur'});
        }
    });

    router.use('/', (requete, reponse) => {
        reponse.render('layouts', { pageTitle: "Cette page n'existe pas", page: 'erreur'});
    });

    return router;
}