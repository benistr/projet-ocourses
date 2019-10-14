import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import CreatedList from 'src/components/CreatedList';
import CreatedRackContainer from 'src/components/CreatedRack';
import * as jwtDecode from 'jwt-decode';

//Local import 
import './CreateList.scss';





class CreateList extends React.Component{
    constructor(props) {
        super(props);
        console.log('props reçu', props);
        console.log('rackList:', props.rackList)
        this.state = {
            isConnected: false,
            product: '',
            rack: '',
            quantity: '',
            fav: false,
            id: 0
        }

        if(window.localStorage.getItem('cool-jwt') === null){
            console.log('pas de jwt');
        } else {
            console.log('jwt detécté')
            let userId= jwtDecode((window.localStorage.getItem('cool-jwt')));
            console.log(userId._id);
            this.state.isConnected = true,
            console.log('state de CreateList après connexion', this.state) 
  
        }
    }

    

    

// Méthode ajoutant le produit à la list des items du state.
    handleSubmit = () => {
        console.log('HandleSubmit lancé');
        console.log(this.state)
        this.props.addItem(this.state)
    }  

 
//Méthode permettant d'intégrer les valeurs indiquées par l'User dans l'objet NewItem
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
            id: Math.random(1, 100)
        })
    }
    
    handleListSave = () => {
        console.log('click sur enregistrement', this.props.itemList)
    }


    render() {
      return  <div className="mainListContainer">
 
       {/* Input de recherche */}
         <form className="inputs" onSubmit= { (e) => { 
             e.preventDefault();
             this.handleSubmit() }}>
         <input type="text" className="input" icon="search" placeholder="Produit recherché..." value={this.state.product} name="product" id="product"  onChange={(e) => this.handleChange(e, 'product')}/>
         <select className="input" icon="cart" name="rack" id="rack" value={this.state.rack} onChange={(e) => this.handleChange(e, 'rack')} >
             <option value="">--Categorie / Rayon--</option>
             <option value="Animaux">Animaux</option>
             <option value="Autres">Autres</option>
             <option value="Bébé">Bébé</option>
             <option value="Bio">Bio</option>
             <option value="Biscuits">Biscuits</option>
             <option value="Boissons alcoolisées">Boissons alcoolisées</option>
             <option value="Boissons">Boissons</option>
             <option value="Boulangerie">Boulangerie</option>
             <option value="Confiserie">Confiserie</option>
             <option value="Epicerie">Epicerie</option>
             <option value="Fruits &amp; Légumes">Fruits &amp; Légumes</option>
             <option value="Hygière">Hygiène</option>
             <option value="Poissons">Poissons</option>
             <option value="Produits frais">Produits frais</option>
             <option value="Produits Ménagers">Produits Ménagers</option>
             <option value="Surgelés">Surgelés</option>
             <option value="Viandes">Viandes</option>
             <option value="Viennoiseries">Viennoiseries</option>
         </select>
         <input type="text" className="input" icon="" placeholder="Quantité" name="quantity" id="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e, 'quantity')}/>
         <button type="submit">Ajouter</button>
         </form>
         <button onClick={() => {this.handleSave()}}>Sauvegarder la Liste</button>

        {/* {this.props.rackList.map( (rack, index) => {
            console.log(rack);
            this.props.itemList.map( (item, index) => {
                if(item.rack === rack){
                     console.log(item)
           //Boucler sur item list car rackList ne change pas si 2 item on le meme rayon
                   return <CreatedRackContainer key={index} rack={rack} item={item}/>}
            })
                
            })
        } */}
        {this.props.rackList.map( (rack, index) => {
                return <CreatedRackContainer 
                        key={index}
                        rack={rack}
                        />
            })
        }
        
    </div>


    
}
}

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => {
      return {
        ...state
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        updateState: (newState) => {
            dispatch({ type : 'UPDATE_STATE', value : newState })
        },
        addRackName: (name) => {
            dispatch({ type: 'NEW_RACK', value: name })
        },
        deleteItem: (id) => {
            console.log('dans deleteItem id: ', id);
          dispatch( {type: "DELETE_ITEM", value: id} );
        },
        addItem: (item) => {
            console.log('dans addItem, ajout de ', item)
            dispatch( {type: "ADD_ITEM_TO_LIST", value: item})
        },
        
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const CreateListContainer = connectionStrategies(CreateList);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  export default CreateListContainer;

