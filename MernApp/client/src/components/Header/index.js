import React from 'react';
import { NavLink } from 'react-router-dom';

import { Header, Segment } from 'semantic-ui-react'
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"></link>

// Styles et assets
import './header.scss';
import Logo from './images/logo.png';
import Menu from './images/menu.png';
import Compte from './images/compte.png';

// Insertion des premières ancres de navigation dans le Header à l'aide de NavLink qui enveloppe l'élément (div, lu, ul, etc) complété par le paramètre to="" qui reprendre le chemin indiqué dans le fichier App.js
const Nav = () => (
  <div id="header">
    
      <ul id="menu">
        
        <li className="logo-div">
        <NavLink to="/" id="a" href="">
        <img className="logo" src={Logo}/>
        </NavLink>
        </li>
       
        <li id="nav">
        <NavLink to='/listes'id="a" href="">
        Mes Listes
        </NavLink>
        </li>
        
        <li id="nav">
          <a id="a" href="">Mes Recettes</a>
        </li>
        <li id="nav">
          <a id="a" href="">Légumes de saison</a>
        </li>
        <li id="nav">
          <a id="a" href="">Qui Sommes-nous?</a>
        </li>

        
        <li id="nav">
          <NavLink to='/account' id="a" href="">
          Mon Compte
          </NavLink>
        </li>
        
        <ul id="picto">
          <a id="a" href=""><img className="picto-compte" src={Compte} /></a>
          <a id="a" href=""><img className="picto-menu" src={Menu}/></a>
          
          <li id="nav2">
          <NavLink to="login" id="a" href="">
          Connexion
          </NavLink>
          </li>
          
        </ul>
        
      </ul>
  </div>
)

export default Nav;