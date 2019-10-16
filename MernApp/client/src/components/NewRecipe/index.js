import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Input } from 'semantic-ui-react';

//Local imports
import './styles.sass';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: this.props.isConnected,
            user:this.props.connectedUser,
            favlist: this.props.favItems,
            count: 1
        }
        console.log('state du main', this.state, 'et racklist', this.props.rackList)
        if(window.localStorage.getItem('cool-jwt') === null){
            console.log('pas de jwt');
        } else {
            console.log('jwt detécté')
            let userId= jwtDecode((window.localStorage.getItem('cool-jwt')));
            console.log(userId._id);
            axios.get(`http://localhost:8800/api/user/getuser/${userId._id}`)
            .then(res => {
              console.log('voila la réponses suite à la requete getUser', res.data, 'et la favlist', res.data.favlist)
              let newConnectedUser = {
                name: res.data.name,
                surname: res.data.surname,
                email: res.data.email
              }
              let newIsConnected = true;
              let newFavItems = res.data.favlist;
              console.log('après recup de la réponse dans après la requete getUser', newConnectedUser, newFavItems, newIsConnected)      
          
             //Je lance ma méthode pour obtenir les détails de l'user et les mettre dans le store
             this.props.setConnecterUser(newConnectedUser, newIsConnected, newFavItems);
            })
        }
}

addIngredient = () => {
    this.setState({ count: this.setState.count + 1 })
}


    render(){
        return (
            <div className="mainContainer">
                <p className="navigation">▶ Accueil ▶ Nouvelle recette</p>
                <Input 
                name="titre-recette"
                type="text"
                className="ui input"
                placeholder="Titre de votre recette"
                />
                <label className="label">Ingrédient N°{this.state.count}</label>
                <Input 
                name="ingrédient1"
                type="text"
                className="ui input"
                placeholder="Ingrédient"
                />
                <form>
                <button className="ui button">Enregistrer</button>
                </form>
            </div>
        )
    };
}
// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => {
      return {
        connectedUser: state.connectedUser,
        favItems: state.favItems,
        isConnected: state.isConnected
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        updateState: (newState) => {
            dispatch({ type : 'UPDATE_STATE', value : newState })
        },
        setConnecterUser: (user, connected, favlist) => {
            console.log('dans mon action à dispatch', user, connected, favlist)
            dispatch({ type : 'USER_CONNECTED', value : {user, connected, favlist} })
        }
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const MainContainer = connectionStrategies(Main);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  export default MainContainer;