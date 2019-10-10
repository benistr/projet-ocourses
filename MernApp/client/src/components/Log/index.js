import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

/**
* Local import
*/
import Logo from '../../../../../Ressources/Images/logo.png';

// Composants enfants éventuels


// Styles et assets
import './styles.sass';

/* class Popup extends React.Component {
    render() {
        return (
        <div className='popup'>
            <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
        </div>
        );
    }

    togglePopup() {
        this.setState({
        showPopup: !this.state.showPopup
        });
    }
}
 */
class Log extends React.Component {
    constructor() {
        super();
        this.state = {
        showPopup: false,
        email: "",
        password: "",
    };
}

handleChange = event => {
    this.setState({
        email: event.target.value,
        password: event.target.value
    })
}

handleSubmit = event => {
    event.preventDefault();
    axios.post('/auth/getToken', {
    
        email: this.state.email,
        password: this.state.password,
    
    }).then(res => localStorage.setItem('cool-jwt', res.data));
}

    render() {
        return (
            <div className='mainContainer'>
            <div className='logContainer'>
                <h1>Se connecter</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <form method="POST" action="http://localhost:8800/api/user/login">
            <Input
                name="email"
                type="email"
                className="ui input"
                placeholder="E-mail"
                value={this.state.value}
            />
            <Input
                name="password"
                type="password"
                className="ui input"
                placeholder="Mot de Passe"
                value={this.state.value}
            />
                <button type="submit" className="ui button">
                Se connecter
                </button>
                <button type="cancel" className="ui button">
                Annuler
                </button>
            </form>
            <br></br>
            <small>Comment ? Vous n'avez pas encore de compte ?</small>
            <NavLink to="/signup">▶ ▶ ▶ Créer un compte ici ◀ ◀ ◀</NavLink>
            </div>
            </div>
        );
    }
};

export default Log;