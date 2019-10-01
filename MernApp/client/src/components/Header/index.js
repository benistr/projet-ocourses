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
        <NavLink to="/">
        <li className="logo-div">
          <a id="a" href=""><img className="logo" src={Logo}/></a>
        </li>
        </NavLink>
        <NavLink to='/listes'>
        <li id="nav">
          <a id="a" href="">Mes Listes</a>
        </li>
        </NavLink>
        <li id="nav">
          <a id="a" href="">Mes Recettes</a>
        </li>
        <li id="nav">
          <a id="a" href="">Légumes de saison</a>
        </li>
        <li id="nav">
          <a id="a" href="">Qui Sommes-nous?</a>
        </li>
        <NavLink to="/useraccount">
        <li id="nav">
          <a id="a" href="">Mon Compte</a>
        </li>
        </NavLink>
        <ul id="picto">
          <a id="a" href=""><img className="picto-compte" src={Compte} /></a>
          <a id="a" href=""><img className="picto-menu" src={Menu}/></a>
          <NavLink to="login">
          <li id="nav2">
          <a id="a" href="">Connexion</a>
          </li>
          </NavLink>
        </ul>
        
      </ul>
  </div>
)

export default Nav;