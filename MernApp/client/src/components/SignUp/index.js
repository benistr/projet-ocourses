import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

/**
* Local import
*/
import Logo from '../../../../../Ressources/Images/logo.png';

// Composants enfants éventuels


// Styles et assets
import './styles.sass';

class SignUp extends React.Component {
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
                <h1>S'enregristrer</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <Input
            key=""
            type=""
            className="ui input"
            placeholder="Nom"
            // Duo de props pour faire une input contrôlé :
            value=""
            onChange=""
            />
            <Input
            key=""
            type=""
            className="ui input"
            placeholder="Prénom"
            // Duo de props pour faire une input contrôlé :
            value=""
            onChange=""
            />
            <Input
                key=""
                type=""
                className="ui input"
                placeholder="E-mail"
                // Duo de props pour faire une input contrôlé :
                value=""
                onChange=""
            />
            <Input
                key=""
                type=""
                className="ui input"
                placeholder="Mot de Passe"
                // Duo de props pour faire une input contrôlé :
                value=""
                onChange=""
            />
            <form onSubmit="">
                <button type="submit" className="ui button">
                S'enregistrer
                </button>
                <button type="cancel" className="ui button">
                Annuler
                </button>
            </form>
            </div>
        );
    }
};

export default SignUp;