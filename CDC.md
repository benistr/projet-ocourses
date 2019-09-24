## Présentation

Une interface (site et appli si possible) pour gérer et préparer facilement sa liste de courses afin d'être plus efficace une fois dans le magasin (supermarché, coop, boucherie, boulangerie, etc).
Moins de temps pour faire les courses = plus de temps pour manger +1

Description
En créant un compte, l'utilisateur pourrait enrichir sa liste de courses en assignant un produit + quantité appartenant à une catégorie (créée en amont).

Exemple :

    500 gr | viande hâchée | viandes & poissons
    2 | pavés de saumons | viandes & poissons
    6 | bières | boissons
    1 | chips | apéros

Grâce à un drag & drop, l'utilisateur pourrait agencer les catégories en fonction de son parcours dans le supermarché. Au fur et à mesure des produits mis dans son caddie, il pourrait cliquer sur le produit en question qui changerait d'état (code couleur, police barrée : à définir).

Côté préparation de la liste, j'ai pensé ajouter un onglet recettes. L'utilisateur pourrait alimenter une base de données. Il renseignerait chaque ingrédient de chaque recette qu'il a l'habitude de faire. Ainsi, en cliquant sur une des recettes, les ingrédients s'ajouteraient automatiquement à la liste de courses.
Un petit rappel pourrait être ajouté pour se rappeler des recettes choisies pour la semaine et pourquoi pas ajouter un petit calendrier pour les plus organisés/sportifs d'entre nous.

Le but ultime serait d'arriver à un partage de liste avec d'autres utilisateurs (potes, compagne, compagnon), pour que chacun puisse agrémenter la liste et vérifier les éléments déjà achetés.

Pourquoi pas sur une version plus élaborée, ajouter des statistiques sur le nombre de recettes choisies sur une période, des informations nutritives ou des photos pour préciser une marque ou un produit précis lorsqu'on est plusieurs utilisateurs sur une même liste.

Les bonnes idées sont les bienvenues pour agrémenter le site et faire gagner du temps à l'utilisateur.

## Délai

Sprint 0 jusqu'au jeudi 26 septembre 2019 - livrable : wireframes + arborescence

Sprint 1 jusqu'au jeudi 3 octobre 2019 - livrable : ?

Sprint 2 jusqu'au jeudi 10 octobre 2019 - livrable : ?

**Sprint 3 jusqu'au jeudi 17 octobre 2019 - livrable : V1**

## Arborescence

    Accueil avec :
        Lien vers les legumes de saison
        Lien vers les listes sauvegardées (si connecté)
        Lien vers les recettes
        Contenu (à déterminer)
    
    Page/Pop up de connexion et inscription

    Une page "Mes listes" pour accéder aux listes sauvegardées

    Une page "Liste" (après séléction d'une liste) pour la consulter/modifier
        Un lien de partage/d'ajout de collaborateur
            
    Page "Qui sommes nous"
    
    Mentions légales

### Navigation interne

Sur Mobile
    Page d'accueil avec menu Burger (ou équivalant) affichant le menu sur la moitié de l'écran.
    
Sur Ordi

    Un menu principal vers les catégories (+ lien vers l'accueil)
    Menu secondaire sur le côté pour accéder aux auteurs
    Sur les listes d'articles, j'accède aux détails de l'article en question en cliquant sur son titre

## Templates
Layout global

    Page d'accueil :
        Lien vers aliments de saison 
        Lien vers mes listes
        Lien vers les recettes
    
    Header : 
        Un titre/logo
        Un slogan (baseline)
        Un menu avec :
            liens vers les catégories
    
    Pied de page :
        Liens vers les réseaux sociaux
        Liens navigation annexe type "mentions légales"

    Listes :
        Sidebar à droite qui regroupe :
            Aliments/Produits favoris

## Contraintes techniques

Site responsive Compatibilité dernières versions des navigateurs (Chrome (2 dernières versions), Firefox, Edge + versions mobiles ?)
Spécifications techniques
Architecture logicielle choisie

### Côté front

    HTML5 : le code respectera une sémantique correcte : point d'entrée de notre modèle React
    CSS 3 : respect de la charte graphique
    React : sera utilisé principalement

### Côté back

    Node.JS ?
    Base de données (stockage des données articles, auteurs...): Node.JS ???

### Description des données

    Recettes : 
        - Titre
        - Instructions
        - Ingrédients
        - Lien vers recette originale
        - Tips / Astuces
        - Catégories

### Fonctionnalités prioritaire après WireFrame

    Ergonomie
        Accentuation visuelle de la page visitée
        Chemin du site sur chaque page visitée

    Page d'accueil bureau
        Header
            Navigation complète (Mes listes, Mes recettes, Mon Compte, Légumes de saison, Qui sommes-nous?)
            Connexion
        Body
           Fruits & Légumes de saison
           Suggestions de recettes
           Créer une liste 
        Footer
            Contact
            CGU
            Mentions légales

    Page d'accueil mobile
        Header
            Logo
            Menu Burger
            Connexion
        Body
            Fruits & Légumes de saison
            Suggestions de recettes
            Créer une liste 
        Footer
            Accès rapide aux 3 fonctionnalités (si connecté)

    Page liste bureau
        Header
            Navigation complète (Mes listes, Mes recettes, Mon Compte, Légumes de saison, Qui sommes-nous?)
            Connexion
        Body
            Chemin du site
            Si connecté : accès à "Mes listes"
            Si non connecté : accès à une liste vide
            Export de liste
            Partage de liste
            Barre de recherche/Input + quantités (Input) + rayons/catégorie
            Liste en drag & drop
            Possibilité de supprimer le produit / Ajouter en favoris / Modifier nom et quantité d'un produit
            Rayer un produit pour dire qu'il est dans le caddie
            Bouton de validation de la liste : top départ pour les courses !
        Footer
            Contact
            CGU
            Mentions légales

    Page liste mobile
        Header
            Logo
            Menu Burger (avec CGU, QSN, Contect, etc)
            Connexion
        Body
            Chemin du site
            Si connecté : accès à "Mes listes"
            Si non connecté : accès à une liste vide
            Export de liste (choix du format)
            Partage de liste (envoi lien par mail)
            Barre de recherche/Input + quantités (Input) + rayons/catégorie
            Liste en drag & drop
            Possibilité de supprimer le produit / Ajouter en favoris / Modifier nom et quantité d'un produit
            Rayer un produit pour dire qu'il est dans le caddie
            Bouton de validation de la liste : top départ pour les courses !
        Footer
            Accès rapide aux 3 fonctionnalités (si connecté)

    Page recette bureau
        Header
            Navigation complète (Mes listes, Mes recettes, Mon Compte, Légumes de saison, Qui sommes-nous?)
            Connexion
        Body
            Une recette affichée en top de manière aléatoire
            Un champ de recherche
            Vignette avec les recettes ajoutées
            Bouton ajouter recette
        Footer
            Contact
            CGU
            Mentions légales

    Page recette mobile
        Header
            Logo
            Menu Burger (avec CGU, QSN, Contect, etc)
            Connexion
        Body
            Une recette affichée en top de manière aléatoire
            Un champ de recherche
            Vignette avec les recettes ajoutées
            Bouton ajouter recette
        Footer
            Accès rapide aux 3 fonctionnalités (si connecté)

    Page Mon Compte bureau & mobile
        Pop up - modale pour la connexion et/ou création de compte
        Modification de l'interface si connecté
        Mon compte :
            Modification des informations perso
            Mes listes
            Mes produits favoris
            Mes recettes

    Page 404
    Page contact
    Page qui sommes-nous ?

