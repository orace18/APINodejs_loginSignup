const jwt = require('jsonwebtoken');

// Le middleware de l'authentification, la logique de l'authentification
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'CLE_DE_SECURITE_ALEATOIRE');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
    } catch (error) {
        res.status(401).json({error});
    }
};