const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require ('../validation');


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

    //LOGIN
router.post('/login', (req, res) => {
    //VALIDATE DATE BEFORE LOGIN
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
})

module.exports = router;