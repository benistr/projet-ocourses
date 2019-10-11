const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require ('../validation');

// import de config
const authConfig = require('../../config/config');

// Pour gérér les tokens lors de la création du compte
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}


router.post('/register', async (req, res) => {

    //VALIDATE DATE BEFORE CREATE USER
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //CHECKING IF USER ALREADY IN DATABASE
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    //PASSWORD HASH WITH BCRYPTJS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //CREATE A NEW USER
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashedPassword,
    })
    try{
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch(err){
        res.status(400).send(err);
    }
});

// Route login
router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    // comme on avait mis le select de password à faux, pour pouvoir l'accéder on fait .select('+password')
    const user = await User.findOne({ email }).select('+password');

    // si on trouve pas l'user dans la bdd
    if (!user)
        return res.status(400).send({ error: 'User not found '});

    // si user existe mais le mot de passe ne correspond pas 
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });

        // pour le que le password soit pas visible, je le mets comme undefined
        user.password = undefined;

        // On doit gérer un hash unique pour notre appli, pour ça on a crée le fichier auth.json dans config
        // où on a stocké le hash
        // On gère notre jwt
        // 1er paramètre = je cherche le user par son id
        // 2è paramètre = hash unique pour notre appli (il faut pas quelle soit utilisé ailleurs)
        const token = jwt.sign({ id: user.id } , authConfig.secret , {
            expiresIn: 86400,
        });

        res.send({ 
            user, 
            token: generateToken({ id: user.id }), // pour qu'au moment de la création le token soit crée pour ce user id
        });

        
});


/*
    //LOGIN
router.post('/login', async (req, res) => {
    //VALIDATE DATE BEFORE LOGIN
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //CHECKING IF EMAIL EXISTS
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    //CHECKING IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({ id: user._id}, process.env.TOKEN_SECRET, {
        expiresIn: 86400,
    });

    res.header('auth-token', token).send(token);

})*/

module.exports = router;