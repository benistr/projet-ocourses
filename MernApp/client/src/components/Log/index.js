import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

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
        <div className='app'>
            <h1>Test Login</h1>
            <button onClick={this.togglePopup.bind(this)}>Popup Login</button>
            <button onClick={() => {alert('It works');}}>Try me when popup is open</button>
            {this.state.showPopup ? 
        <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
        />
        : null
            }
        <img src={Logo}></img> 
        <br></br>
        <Input
            key=""
            type=""
            className="ui input"
            placeholder="Votre Email"
            // Duo de props pour faire une input contrôlé :
            value=""
            onChange=""
        />
        <Input
            key=""
            type=""
            className="ui input"
            placeholder="Votre Mot de Passe"
            // Duo de props pour faire une input contrôlé :
            value=""
            onChange=""
        />
        <form onSubmit="">
            <button type="submit" className="ui button">
            Connexion
            </button>
            <button type="cancel" className="ui button">
            Annuler
            </button>
        </form>
        <br></br>
        <small>Pas encore de compte ?</small><p>Créer un compte</p>
        </div>
    );
}
};

export default Log;