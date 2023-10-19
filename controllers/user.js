const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// La logique de la création de compte
exports.login = (req, res, next) =>{
    User.findOne({username: req.body.username})
    .then(user => {
        if(!user){
           res.status(401).json({message: 'Utilisateur non trouvé !'});
        } else {
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if(!valid){
                   res.status(401).json({message: 'Mot de passe incorrect !'});
                } else {
                    res.status(200).json({
                        userId: user._id,
                       /* token: jwt.sign(
                            {userId: user._id},
                            'CLE_DE_SECURITE_ALEATOIRE',
                            {expiresIn: '24h'}
                        )*/
                        token: 'MON_TOKEN'
                    });
                }
            })
            .catch(error => {
                res.status(500).json({error});
            });
        }
    })
    .cath(error => res.status(500).json({error}));
};

// La logique de la création de compte
exports.signup = (req, res, next) =>{
    
    bcrypt.hash(req.body.password, 15)
    .then( hash => {
        const user = new User({
            username: req.body.username,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({message: 'Utilisateur créer avec succès !'}))
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};