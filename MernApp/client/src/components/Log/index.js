import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
* Local import
*/
import Logo from '../../../../../Ressources/Images/logo.png';

// Composants enfants éventuels


// Styles et assets
import './styles.sass';

class Popup extends React.Component {
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
}

class Log extends React.Component {
    constructor() {
        super();
        this.state = {
        showPopup: false
    };
}

togglePopup() {
    this.setState({
    showPopup: !this.state.showPopup
    });
}

    render() {
        return (
            <div className='logContainer'>
                <h1>Se connecter</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <Input
                type=""
                className="ui input"
                placeholder="E-mail"
                // Duo de props pour faire une input contrôlé :
                value=""
                onChange=""
            />
            <Input
                type=""
                className="ui input"
                placeholder="Mot de Passe"
                // Duo de props pour faire une input contrôlé :
                value=""
                onChange=""
            />
            <form onSubmit="">
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
        );
    }
};

export default Log;