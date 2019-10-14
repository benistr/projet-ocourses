import React, { useState, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from 'src/components/Menu-Burger/hooks';
import { GlobalStyles } from 'src/components/Menu-Burger/global';
import { theme } from 'src/components/Menu-Burger/theme';
import { Burger } from 'src/components/Menu-Burger/components';
import { Menu } from 'src/components/Menu-Burger/components';
import * as jwtDecode from 'jwt-decode';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header, Segment } from 'semantic-ui-react'
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"></link>

// Styles et assets
import './header.scss';
import Logo from './images/logo.png';
import Ptimenu from './images/menu.png';
import Compte from './images/compte.png';

const [open, setOpen] = useState(false);
const node = useRef();
useOnClickOutside(node, () => setOpen(false));


// Insertion des premières ancres de navigation dans le Header à l'aide de NavLink qui enveloppe l'élément (div, lu, ul, etc) complété par le paramètre to="" qui reprendre le chemin indiqué dans le fichier App.js
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isConnected: false,
        name: "",
        surname:"",
        email: "",
    }
    console.log('state', this.state)
    if(window.localStorage.getItem('cool-jwt') === null){
        console.log('pas de jwt');
    } else {
        console.log('jwt detécté')
        let userId= jwtDecode((window.localStorage.getItem('cool-jwt')));
        console.log(userId._id);
        axios.get(`http://localhost:8800/api/user/getuser/${userId._id}`)
                .then(res => {
                console.log('voila la réponses suite à connected user', res.data)
                this.setState({...this.state, isConnected : true,
                name: res.data.name,
                surname: res.data.surname,
                email: res.data.email,})
                console.log('state après connexion', this.state)
                console.log(this.state.isConnected)
            })
        
    }
  }


render() {
  return (
  <div id="header" ref={node}>

      <ul id="menu">
        
        <li className="logo-div">
        <NavLink to="/" id="a" href="">
        <img className="logo-head" src={Logo}/>
        </NavLink>
        </li>
       
        <li id="nav-desktop">
        <NavLink to='/listes' id="a" href="">
        Mes listes
        </NavLink>
        </li>

        <li id="nav-desktop">
        <NavLink to='/protected' id="a" href="">
        Protégé
        </NavLink>
        </li>
        
        <li id="nav-desktop">
          <NavLink to="/recettes" id="a" href="">Mes recettes
          </NavLink>
        </li>
        <li id="nav-desktop">
          <NavLink to="/saisons" id="a" href="">Légumes de saison
          </NavLink>
        </li>

        
        <li id="nav-desktop">
          <NavLink to='/team' id="a" href="">Qui sommes-nous ?
          </NavLink>
        </li>

        <li id="nav-desktop">
          <NavLink to='/account' id="a" href="">
          Mon compte
          </NavLink>
        </li>
        
        <ul id="picto">

          <NavLink to="/login" id="a" href=""><img className="picto-compte" src={Compte} /></NavLink>

          

         
          
          <li id="nav2">
          <NavLink to="/login" id="a" href="">
          Connexion
          </NavLink>
          </li>
          
        </ul>
        
      </ul>

      <ThemeProvider theme={theme}>

        <GlobalStyles />
  
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>

      </ThemeProvider>
 
  </div>
);
}
}

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      ...state,
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      updateState: (newState) => {
          dispatch({ type : 'UPDATE_STATE', value : newState })
      },
      setConnecterUser: (userId) => {
          dispatch({ type : 'USER_CONNECTED', value : userId })
      }
      
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const NavContainer = connectionStrategies(Nav);

// Étape 3 : on exporte le composant connecté qui a été généré
export default NavContainer;