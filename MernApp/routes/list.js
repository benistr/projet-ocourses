// Contoller qui va demander à l'user d'être connecté sur l'appli

const express = require('express');
const authMiddleware = require('../middlewares/authenticate');

const List = require('../model/List');
const Product = require('../model/Product');

const router = express.Router();

// j'appele le middleware crée
router.use(authMiddleware);



// Pour lister les lists (List)
// 2.
router.get('/', async (req, res) => {
    try {                               //4.
        const lists = await List.find().populate(['user', 'products']);

        return res.send({ lists });

    } catch (err) {

        return res.status(400).send({ error: 'Error loading lists'});
    }
});

// Pour afficher une liste précise avec son id (Show)
// 5.
router.get('/:listId', async (req, res) => {
    try {
    const list = await List.findById(req.params.listId).populate(['user', 'products']);

    return res.send({ list });

} catch (err) {
    return res.status(400).send({ error: 'Error loading list'});
}
});

// Pour créer les listes, pas besoin de l'id (Create)
// 1.
router.post('/', async (req, res) => {
    try {   
        const { title, description, products } = req.body;
                                        // 3.
        //const list = await List.create({ ...req.body, user: req.userId });
        // A l'étape 7 ça change :
        const list = await List.create({ title, description, user: req.userId });

        // 8. Création produit
        // await Promise.all parce qu'on veut que tout soit itéré avant de passer au dernier save (await list.save();)
        await Promise.all(products.map( async product => {
            const listProduct = new Product({ ...product, list: list._id });

            // On sauvegarde le produit, .save() est asynchrone amors on fait un await
            await listProduct.save();
            
            list.products.push(listProduct);
            }));

            // Comme je rajoute d'autres produits dans ma liste j'ai besoin de refaire un save
            await list.save();

        return res.send({ list });

    } catch (err) {

        return res.status(400).send({ error: 'Error creating new list'});
    }

});

// Pour actualiser les lists, on aura toujours besoin de l'id (Update)
router.put('/:listId', async (req, res) => {
        try {   
            const { title, description, products } = req.body;
                                            
            const list = await List.findByIdAndUpdate(req.params.listId, { 
                title, 
                description 
             }, { new: true }); // mongoose par défaut n'envoie pas la liste actualisé, on doit lui donner ce msg pour qu'il le fasse

             // 10.
             list.products = [];
             await Product.remove({ list: list._id});
    
            // 8. Création produit
            // await Promise.all parce qu'on veut que tout soit itéré avant de passer au dernier save (await list.save();)
            await Promise.all(products.map( async product => {
                const listProduct = new Product({ ...product, list: list._id });
    
                // On sauvegarde le produit, .save() est asynchrone amors on fait un await
                await listProduct.save();
                
                list.products.push(listProduct);
                }));
    
                // Comme je rajoute d'autres produits dans ma liste j'ai besoin de refaire un save
                await list.save();
    
            return res.send({ list });
    
        } catch (err) {
    
            return res.status(400).send({ error: 'Error updating product'});
        }
    
    });

// Pour effacer une liste (Delete)
// 6.
router.delete('/:listId', async (req, res) => {
        try {
        await List.findOneAndDelete(req.params.listId);

        return res.send();
    
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting list'});
    }
});

module.exports = app => app.use('/lists', router);

// NOTES

// 1. Le premier pas c'est de créer une liste, on fait le try catch avec notre requête, on vérifie si ok sur insomnia
// où on a déjà crée notre dossier Lists avec le CRUD à l'intérieur avec ses routes

// 2. On passe aux étapes plus simples avant de s'attaquer aux tableau des produits: l'affichage des listes et delete d'une liste
// Pour l'affichage d'une liste: await List.find(), on vérifie chez Insomnia, quand on clique sur send on doit avoir la liste des listes
// dans notre cas nous n'avons qu'une seule

// 3. On souhaite rattacher une liste à l'user qui l'a créée, on revient sur le code de créations de listes pour rajouter le spread operator
// et l'user (user: req.userId), on revient sur Insomnia dans create on send encore une fois et on vérifie si l'user est bien présent

// 4. Si on veux avoir le nom de l'user qui a crée la liste on peut utiliser le eager loading de mongodb, il nous permettra de chercher les listes
// et les users au même temps sans avoir besoin de faire une autre requête. Pour utiliser le eager loading on met populate() après l'appel de find()
// avec le nom de la relation qu'on veut utliser, dans notre cas 'user', l'user qui a crée la liste

// 5. Presque la même méthode qu'avant, pour vérifier chez Insomnia on récupères l'd de la liste et on colle sur l'url de la requête show (base_url/lists/n° ID)

// 6. Mongodb nous aide avec des méthodes "toutes prêtes", poue effacer une liste il suffit d'utiliser celle là. Comme on va remove la liste logiquement on retourne rien

// 7. Comme on aura le tableau de produits à insérer dans listes, c'est bien de préciser de quoi on aura besoin juste à la créaton d'une liste (1.)
// On pourra pas ajouter les produits tout de suite parce que ça metrrait un erreur

// 8. Pour ajouter les produits on va avoir besoin de parcourir le tableau de produits, on crée la liste à part

// 9. a part l'id du produit on le voit pas encore dans la liste, pour ce faire on rajoute au eagle loading de (1. et 3.) l'affichage des produits

// 10. La partie de update change pas beaucoup de la partie de création c/c.  
// Quand on actualise ou crée un nouveau produit, il y a tous les produits qui nous sont retournées, pour éviter ça, on va effacer les produits en relation avec la liste concernée pour les créer à nouveau