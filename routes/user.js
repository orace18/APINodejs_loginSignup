const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//La route pour la création de compte
router.post('/signup', userCtrl.signup);

//La route pour la connexion
router.post('/login', userCtrl.login);

module.exports = router;