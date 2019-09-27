

import React from 'react';

import { Header, Segment } from 'semantic-ui-react'
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"></link>

// Styles et assets
import './header.sass';
import Logo from './images/logo.png';
import Menu from './images/menu.png';
import Compte from './images/compte.png';

const Nav = () => (
  <div id="header">
    <div><img className="logo" src={Logo}/></div>
    <div><img className="compte" src={Compte} /></div>
    <div><img className="menu" src={Menu}/></div>
  </div>
)

export default Nav;