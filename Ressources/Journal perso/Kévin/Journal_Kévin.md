# Journal de bord

## Jour 1 - Lundi 23 Septembre

### Matin
    Réunion en cockpit pour présentation du suvi
    Présentation du sprint Zero à présenter Jeudi 26

### Après-midi 
    Réunion d'équipe
        Répartition des rôles
        Discussion autour du projets et des fonctionnalités
        Elaboration du cahier des charges


## Jour 2 - Mardi 24 Septembre

### Matin
    Réunion 15 mn pour prévoir le contenu de la journée
    Elaboration de wireframes en autonomie

### Après Midi
    Présentation de chaque wireframe
    Listing des foncitonnalités à retenir et des visuels de travail
    Rédaction des Users Stories.


## Jour 3 - Mercredi 25 Septembre 

### Matin
    Finalisation de la maquette du site
    Recherches sur mongoDB et Node.js pour comprendre le fonctionnement du back en JS

### Après Midi 
    Recherches sur la base de données à adopter : SQL ou noSQL
    Video Tutoriels sur MERN et MongoDB


## Jour 4 - Jeudi 26 Septembre

### Matin
    Installation de MongoDB et premier test de création de collections

### Après Midi
    Présentation du sprint Zero : maquette et ambitions du projets
    Reflexions sur les problématiques potentielles à prendre en compte


## Jour 5 - Vendredi 27 Septembre

### Journée
    Répartition des premiers composants de pages à créer et création
        Header -> Dorian
        Main -> Kévin
        Footer -> Mimi
        Ecran de login -> Benjamin


## Jour 6 - Lundi 30 Septembre 
    Présentation des composants crées et intégration sur la même page
    Réglages des conflits de CSS pour obtenir des pages fonctionnelles

## Jour 7 - Mardi 01 Octobre
    Prise en charge de la réalisation de la page de création de Liste 
    Réalisation par le biais d'un composant React pourvu d'un state local
    Problématique d'écouteurs d'évènements et de prise en compte des inputs

## Jour 8 Mercredi 02 Octobre 
    Finalisation de la page de création de liste en vue de la présentation du Sprint 1 Jeudi 03. La mise en forme via CSS est identique à celle de la page sur laquelle l'utilisateur consultera ses listes enregistrées.
    La page est fonctionnelle mais il reste des données à y intégrer afin de pouvoir ajouter un produits aux faboris ou bien la supprimer ainsi qu'accéder aux favoris.
    Il faut également permettre d'exporter la liste sous un format donné (pdf, mail, sms) et l'enregistrer en favoris.

## Jour 9 Jeudi 03 Octobre
    Travail sur l'option "supprimer un article".
    Principale difficulté : Rafraichir la page afin que l'item n'apparaisse plus. Il est bien supprimé au sein du tableau "liste de courses en cours" consultable en console.log mais apparait toujours sur la page.

    Mise en place de requête "test" afin d'essayer d'établir la communication entre le front et le back


## Jour 10 Vendredi 4 Octbore
    Journée particulère car passée en voiture sans connexion internet (pas de commit/push)
    Poursuite de test afin de pouvoir supprimer un élément ou le mettre en favoris et que cela apparaissent bien à l'écran. Tentatives d'utilisation de ComposentDidMount/DidUpdate infrcutueuses.
    Travail également sur la partie back afin de trouver comment faire fonctionner MongoDB et NodeJs pour utiliser ensuite la base de données. Visionnage de tuto et lecture de docs en ligne.

## Jour 11 Lundi 7 Octobre
    Nouvelle journée passée en voiture (sans commit/push) mais poursuite du travail sur les suppression/ajout en favoris afin que tout soit correctement synchronisé.
    Abandon de l'utilisation exclusive du local state pour étudier l'utilisation de Redux. Révision des cours à ce sujet et tests d'utilisation du reducer et du store.


## Jour 12 Mardi 8 Octobre 
    L'ajout en favoris et la suppression d'item fonctionnent "visuellement", l'étoile de favoris devient remplie/vide en fonction du click et l'article disparait bien si l'utilisateur clique sur la croix de suppression.
    Reconstruction complète du code de la page Create List afin d'utiliser Redux et son store. 
    La suppression et l'ajout en favoris se font désormais via une action et un dispatch communiqué au reducer. Mais le store et le state local de la page ne se synchronisent pas.

## Jour 13 Mercredi 9 Octobre
    Via le dispatch de l'action de suppression/ajout en favoris le store se modifie bien et prend en compte les changements, mais la mise à jour ne se synchronise pas localement et visuellement.
    Petite avancée tout de même, la mise à jour "visuelle" se fait bien mais uniquement lorsque le formlulaire d'ajout d'artcile est submit. 

## Jour 14 Jeudi 10 Octobre
    Mise en pause de la page Create List afin de se focaliser sur la mise en place du back end et de la bdd car cela devient critique, nous devons absolument pouvoir parvenir à créer un user et la possibilité de se loguer, sous peine de ne pas pouvoir avancer sur les fonctionnalités dédiées aux utilisateurs enregistrés (création de liste et enregistrement, page "mon compte", page "mes listes..."). L'apprentissage de NodeJs et MongoDB est fastidieux et lent, nous décidons de nous focaliser tous les 4 sur ce sujet.
    Présentation de nos avancées et difficultés rencontrées en début d'après midi en cockpit. Les soucis de back sont évoqués.
    La journée est donc consacrée à nouveau aux recherches sur NodeJs/MongoDB et essentiellement sur les façons de loguer un utilisateur (cookies et session, token etc...).
    
## Jour 15 Vendredi 11 Octobre 
    Succès ! Après beaucoup de tentatives infructueuses j'ai réussi à récupérer le token JWT crypté stocké en base données et à renvoyé les données de l'user stockées en base de données vers le front. Cela ouvre la porte aux autres fonctionnalités que nous souhaitons mettre en place et permet également de soufller un peu car l'inquiétude commencait à grandir quant à notre capacité à mettre en place un back en NodeJs.
    

## Jour 16 Samedi 12 Octobre
    Le login se fait mais nous n'arrivons pas à récupérer les détails de l'user après la redirection

## Jour 17 Dimanche 13 Octobre 
    Nous avons réussis à récupérer les informations de l'user après la redirection et à changer le state local en fonction.

## Jour 18 Lundi 14 Octobre
    Retour sur les methodes d'ajout de fav et affichage dynamique de l'étoile à côté des articles. Après modifications des methodes tout semble fonctionner comme prévu. Reste à lier ça avec le profil de l'utilisateur pour qu'il puisse récupérer ses favoris en se connectant.
    Correction d'une erreur 400 lors de la création d'un user.
    Première tentative pour ajouter les favoris à une "favlist" créée dans les données de l'user stockées en bdd.


## Jour 19 Mardi 15 Octobre
    Mise en place d'une pseudo liste déroulante affichant les favoris enregistrés par l'user. 
    La mise à jour visuelle ne se fait pas correctement, le store de ne synchronise pas. 
    Un setState dans la méthode front permet de corriger cela.
    Les favoris s'affichent bien et un click sur l'article souhaité permet de préremplir le formulaire pour indiquer la quantité souhaité.
    Soucis de synchronisation lorsqu'on ajoute pous supprime un article de la favlist. Affichage aléatoire, semble t'il du à la sollicitation de la bdd? 

## Jour 20 Mercredi 16 Octobre
    A deux jours de la présentation la pression est grande car beaucoup d'étapes restent à réaliser .
    Nous ne parvenons pas à faire cohabiter les listes enregistrés par l'user avec le composant React Beatiful D&D utilisé pour mettre en place le drag and drop. 
    Les favoris ne sont pas encore au point et nous n'avons pas encore mis en place la possibilité de sauvegarder une liste (et encore moins d'y accéder par la suite)
    Amélioration de la méthode d'ajout en favoris, les articles selectionnés s'ajoutent bien à la liste apparaissant sur le composant et à celle enregistré en base de données.
    La suppression d'un item mis en favoris pose toujours un soucis de synchronisation entre la bdd, le store et le state local.
    ItemList qui contient tous les articles ajoutés à la liste de course et favlist qui ne concerne que les articles mis en favoris ont encore du mal à cohabiter.

## Jour 21 Jeudi 17 Octobre 
    Soucis détecté pour les favoris, le filter mis en place dans le reducer provoque une erreur lorsque le tableau favlist est vide. Il faudra le corriger.
    L'essentiel de la matinée à été de trouver comment faire en sorte que la récupération des listes enregistrées par l'user en bdd puisse être transmise au front de manière compatible avec le composant drag&drop. 
    Vue la difficulté nous décidons de limiter le drag and drop aux listes enregistrés, l'application à la liste de courses en cours de création est repoussée à une potentielle version ultèrieure.
    Enfin! en nous y mettant tous les quatre toute la matinée nous avons, avec l'aide de Déborah, pu trouver un schéma de renvoi de données au front qui permettent d'inclure les listes sauvegardées dans le composant de telle sorte que le drag and drop fonctionne.
    Petit bémol, quand on modifie l'ordre des listes via le D&D, celui n'est pas enregistré et un rafraichissement de la page affiche de nouveau l'ordre initial.
    Création d'un bouton "enregistrer la liste" et d'un input permettant de nommer celle-ci.
    Mise en place de la methode d'enregistrement afin que la liste s'ajoute bien en bdd et puisse être récupérée par la suite.
    Les listes enregistrées s'affichent bien sur la pages mes listes ! 
    Mise en place d'un lien sur le titre des listes de la pages "mes listes" afin que l'user puisse être redirigé vers la page "création de liste" en récupérant les articles de la liste enregistrée.
    Le clic sur le titre lance une requete en bdd qui envoi les articles/rayons/quantité dans le store dans la propriétés items list, store récupéré par le composant create list qui affiche ensuite les items correctement.
    Création d'un bouton "effacer la liste en cours" afin de vider la page "create list" facilement, le bouton lancer une action à dispatcher dans le store, cela permet de vider le tableau itemList, un setState permet ensuite de rafraichir le composant.
    Mise en place d'une méthode permettant de "rayer" un article lors de la réalisation des courses, cela s'est fait par l'ajout d'une propriété "shopped" au sein de l'objet "item", cette propriété est un booleen et actualise donc le nom de la classe CSS de l'item.

## Jour 21 Vendredi 18 Octobre => Jour J
    Après la courte nuit de la veille le choix est fait de ne pas trop modifier notre projet afin d'éviter un "crash général" juste avant l'heure de présentation.
    De mon côté une correction des favoris est mise en place afin qu'un item non mis en favoris intialement dans une liste  sauvegardée en tant que "liste 1" mais mis en favoris ensuite dans une liste "liste 2" apparaisse bien dans les favoris (avec affichage de l'étoile remplie) lorsque l'user se rend de nouveau sur la liste "liste1".
    Découverte de la methode <FindOneAndModify> de MongoDB
    Problème de mise en place d'une route dédiée à la suppression d'une liste enregistrée. 
    Peu importe la route créée celle-ci provoque une erreur 400, nous n'arrivons pas à créer de nouvelles routes, cela est peut être dû à la mise en ligne du site? 
    La méthode de suppression de liste est prête et semble fonctionner, mais la route permettant au front de communiquer l'id de la liste à fonctionner ne fonctionne pas.
    Décision prise de stopper tout travail sur le site à 14h afin de pouvoir préparer la présentation prévue pour 16h20.