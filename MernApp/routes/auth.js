const router = require('express').Router();
const User = require('../model/User');
const Lists = require('../model/Lists');
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
        //CREATE AND ASSIGN A TOKEN
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    try{
        console.log('on lance savedUser');
        const savedUser = await user.save();
        res.header('auth-token', token);
        res.send({token, user: user._id}); 

    } catch(err){
        res.status(400).send(err);
    }
});

    //LOGIN
router.post('/login', async (req, res) => {
    console.log('login', req.body.user);
    //VALIDATE DATE BEFORE LOGIN
    // const { error } = loginValidation(req.body.user);
    // if(error){
    //     console.log('verif echouée');
    // return res.status(400).send(error.details[0].message);
    // }

    //CHECKING IF EMAIL EXISTS
    const user = await User.findOne({ email: req.body.user.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    //CHECKING IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.user.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({token, _id: user._id});

})

//Enregistrement des favoris de l'user
router.post('/favlist/:id', async(req, res) => {
    console.log('dans la route favlist', req.params,  'et body', req.body.favlist);
    const user = await User.findOne({ _id: req.params.id});
    const newUser = await User.updateOne({ _id: req.params.id}, {$set: {favlist: req.body.favlist}});
    console.log('user',user, 'et new user', newUser);
})

//Ajouter une nouvelle liste
router.post('/newlist/:id', async(req, res) => {
    console.log('dans la route newlist', req.params.id, 'et le contenu', req.body)
    const list = new Lists ({
        userId: req.params.id,
        title: req.body.listName,
        racks: req.body.racks,
        products: req.body.products,
    });
    try{
        console.log('on lance savedList');
        const savedList = await list.save();
        res.send({list}); 

    } catch(err){
        res.status(400).send(err);
    }
})

//Récupérer les infos d'une liste
router.get('/getlist/:id', async(req, res) => {
    const getlist = await Lists.find({ _userId: req.param.id });
    console.log('retour fait par getlist', getlist, 'pour l\'user', req.params.id);
    res.send({
        tasks: {
            'task-1': { id: 'task-1', content: '- Cette liste est vide pour le moment!'},
            'task-2': { id: 'task-2', content: 'Pouet!'},
          },
          columns: {
            'column-1': {
              id: 'column-1',
              title: 'Ca va être une galère',
              taskIds: ['task-1', 'task-2'],
            },
            'column-2': {
              id: 'column-2',
              title: 'PouetPouet',
              taskIds: [],
            },
          },
          // Facilitate reordering of the columns
          columnOrder: ['column-1', 'column-2'],
    })
})

 
//Obtenir les infos de l'user 
router.get('/getuser/:id', async (req, res) => {
    console.log('dans auth getUser req:', req.params);
    const user = await User.findOne({ _id: req.params.id});
    console.log(user);
    if (!user){

    return res.status(400).send('Email or password is wrong');
    }
    const connectedUser = {
        name: user.name,
        surname: user.surname,
        email: user.email,
        favlist: user.favlist
    }
    res.send(connectedUser);

})

module.exports = router;