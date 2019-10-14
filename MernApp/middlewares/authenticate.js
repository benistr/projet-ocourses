// C'est le middleware que va intercepter les requêtes (req) et les valider avant d'envoyer la réponse (res)
// C'est lui que validera si les tokens sont ok

// import de jwt
const jwt = require('jsonwebtoken');
const authConfig = require('../config/config');

// Convention des middlewares
// on appelle next juste si l'user est prêt pour passer à l'étape d'après (controller)
module.exports = (req, res, next) => {
    // on va chercher dans le header de l'appli
    const authHeader = req.headers.authorization;

    // vérifier si le token a été informé
    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' });

    // vérifier si le token est envoyé au bon format
    // format attendu: Bearer blablablatoken...
    // vérifier s'il a ces deux parties
    const parts = authHeader.split(' '); // split pour séparer le bearer d'un côté et le token de l'autre

        if (!parts.length === 2)
        // si réponse négative, envoie un message d'erreur
        return res.status(401).send({ error: 'Token error' });

    // Si oui déstructurer
    const [ scheme, token ] = parts;

    // Si dans une part il n'y a pas le mot Bearer
    // Regex: 
    // ^ = début de la demande + le mot cherché + $/ = indique la fin de notre vérification + i = case insentive 
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malFormated' });

        // Finalement, on vérifie si le token de l'user est bien le bon
        // decoded = l'id de l'user si token valide
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) return res.status(401).send({ error: 'Token invalid' });    
            
            // si pas d'erreur on arrive ici
            // une fois qu'on demande de générer l'id, j'ai un id "decoded"
            req.userId = decoded.id;
            return next();
        })

};