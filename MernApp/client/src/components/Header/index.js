

import React from 'react';

import { Header, Segment } from 'semantic-ui-react'
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"></link>

// Styles et assets
import './header.scss';
import Logo from './images/logo.png';
import Menu from './images/menu.png';
import Compte from './images/compte.png';

const Nav = () => (
  <div id="header">
    
      <ul id="menu">
        <li className="logo-div">
          <a id="a" href=""><img className="logo" src={Logo}/></a>
        </li>
        <li id="nav">
          <a id="a" href="">Mes Listes</a>
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
          <a id="a" href="">Mon Compte</a>
        </li>
        <ul id="picto">
          <a id="a" href=""><img className="picto-compte" src={Compte} /></a>
          <a id="a" href=""><img className="picto-menu" src={Menu}/></a>
          <li id="nav2">
          <a id="a" href="">Connexion</a>
        </li>
        </ul>
        
      </ul>
  </div>
)

export default Nav;