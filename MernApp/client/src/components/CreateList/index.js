import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import CreatedList from 'src/components/CreatedList';
import CreatedRackContainer from 'src/components/CreatedRack';


//Local import 
import './CreateList.scss';




class CreateList extends React.Component{
    constructor(props) {
        super(props);
        console.log('props reçu', props);
        this.state = {
            update: this.props.update,
            itemList: [this.props.itemsOnList],
            rackList: []
        };

    }
    // Test CDU dans le but d'actualiser le state local à chaque changement du state global (ex suppression d'un item)
    // Problème rencontré : Après suppression length de props est bien != lenght de prevProps mais on n'entre pas dans la condition
    // componentDidUpdate(prevProps, props) {
    //     console.log('CDU appelé');
    //     if(prevProps.itemsOnList.length !== this.props.itemsOnList.length) {
        
    //     console.log('voila les prevProps', prevProps);
    //     }else {
    //         console.log('pas de changement')
    //         console.log('après appel du CDU : PrevPros: ', prevProps, 'et props:', props )
    //     }
    // }
    

    newItem = {};

// Méthode ajoutant le produit à la list des items du state.
    handleSubmit = () => {
        console.log('HandleSubmit lancé');
        //On copie le tableau itemList de state puis on push le newItem dans ce tableau
        let newItemList = this.state.itemList.slice();
        newItemList.push(this.newItem)
        this.props.addItem(this.newItem);
        console.log('Handle submit : newItemList = ', newItemList);
        //On fait une copie du tableau rackList du state
        let newRackList = this.state.rackList.slice();
        // console.log("après le slice", newRackList)
        // On vérifie si le rayon du newItem exite dans le tableau rackList
        // console.log('test handleCheck')
        this.handleCheck(newRackList, this.newItem.rack)         
        console.log('suite HandleCheck, new RackList : ', newRackList);
        // On met à jour le state en remplacant les state.itemList et state.RackList par newItemList et newRackList
        this.setState({ itemList: newItemList, rackList: newRackList});
        console.log('new this.state : ', this.state);
        // console.log('requete axios')
        // this.getRequest('https://world.openfoodfacts.org/cgi/search.pl?search_terms=banania&search_simple=1&action=process&json=1', {headers:{ 'User-Agent': 'CoolFoodApp - Android - Version 1.0' }})
        
    }  

    //requête axios
    getRequest = (url) => {
        console.log('getRequest lancée')
        axios.get(url)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
//Méthode permettant d'intégrer les valeurs indiquées par l'User dans l'objet NewItem
    handleChange = () => {
        // console.log('change!');
        // console.log(event.target.value);
        // console.log(event.target.id);
        this.newItem = {...this.newItem, [event.target.id] : event.target.value};
        this.newItem.id = Math.random(1, 1000);
        this.newItem.fav = false
        console.log('suite input change, this.newItem:', this.newItem);
    }
    
    //Methode vérifiant que le rayon n'existe pas déjà dans le tableau rackList la méthode some() renvoit un booléen si la condition est remplie
    handleCheck(array, rackName) {
        // return this.state.rackList.some(item => val.name === item.name);
        // Vérification avec array.filter()
        if(array.filter( name => name == rackName).length>0 ) {
            console.log('le rayon existe');          
    // Tu peux ajouter une valeur dans ton tableau            
            return array;
            } else { /* Error tu as déjà cette valeur dans ton tableau interdiction de l'ajouter*/ 
        console.log('le rayon n\'existe pas');
        array.push(rackName);       
    }
  
       }

    render() {
      return  <div className="mainListContainer">
 
       {/* Input de recherche */}
         <form className="inputs" onSubmit= { (e) => { 
             e.preventDefault();
             this.handleSubmit() }}>
         <input type="text" className="input" icon="search" placeholder="Produit recherché..." name="product" id="product" onChange={this.handleChange}/>
         <select className="input" icon="cart" name="rack" id="rack" onChange={this.handleChange} >
             <option value="">--Categorie / Rayon--</option>
             <option value="Surgelés">Surgelés</option>
             <option value="Fruits &amp; Légumes">Fruits &amp; Légumes</option>
             <option value="Confiserie">Confiserie</option>
             <option value="Biscuits">Biscuits</option>
             <option value="Produits Ménagers">Produits Ménagers</option>
             <option value="Alcool">Alcool</option>
         </select>
         <input type="text" className="input" icon="" placeholder="Quantité" name="quantity" id="quantity" onChange={this.handleChange}/>
         <button type="submit">Ajouter</button>
         </form>

        {this.state.rackList.map( rack => {
            console.log(rack);
           return <CreatedRackContainer {...this.state}
           key={rack}
           rack={rack} 
           deleteItem={this.props.deleteItem}
           handleFav={this.props.handleFav}
           />
        })}
        
    </div>


    
}
}

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => {
      return {
        itemsOnList: state.itemsOnList
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        deleteItem: (id) => {
            console.log('dans deleteItem id: ', id);
          dispatch( {type: "DELETE_ITEM", value: id} );
        },
        addItem: (item) => {
            console.log('dans addItem, ajout de ', item)
            dispatch( {type: "ADD_ITEM_TO_LIST", value: item})
        },
        handleFav: (bool) => {
            console.log('dans handle fav');
            dispatch({ type: "CLICK_FAV", value : !bool})
        } 
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const CreateListContainer = connectionStrategies(CreateList);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  export default CreateListContainer;

