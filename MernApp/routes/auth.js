const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require ('../validation');


router.post('/register', async (req, res) => {
    console.log('req body user', req.body.user);
    // VALIDATE DATE BEFORE CREATE USER
    // const { error } = registerValidation(req.body.user);
    // if(error){
    //     console.log('manque champs');
    //     return res.status(400).send(error.details[0].message);
    // }

    //CHECKING IF USER ALREADY IN DATABASE
    const emailExist = await User.findOne({ email: req.body.user.email });
    if (emailExist) {
        console.log('mail existe');
        return res.status(400).send('Email already exists');
    }

    //PASSWORD HASH WITH BCRYPTJS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user.password, salt);

    //CREATE A NEW USER
    const user = new User({
        name: req.body.user.name,
        surname: req.body.user.surname,
        email: req.body.user.email,
        password: hashedPassword,
    })
    try{
        console.log('on lance savedUser');
        const savedUser = await user.save();
        res.send({ user});
    } catch(err){
        res.status(400).send(err);
    }
});

    //LOGIN
router.post('/login', async (req, res) => {
    console.log('login');
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
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

})

module.exports = router;