import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import api from '../services/api';

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
        name: '',
        surname: '',
        email: '',
        password: '',
    };
}

handleChange = event => {
    this.setState({
        name: event.target.value,
        surname: event.target.value,
        email: event.target.value,
        password: event.target.value,
    });
    console.log(handleChange);
}

handleSubmit = event => {
    event.preventDefault();

    const user = {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password
    }
}

    render() {
        return (
            <div className='logContainer'>
                <h1>S'enregristrer</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <form method="POST" action="http://localhost:8800/api/user/register">
            <Input
                name="name"
                type="text"
                className="ui input"
                placeholder="Nom"
                value={this.state.value}
            />
            <Input
                name="surname"
                type="text"
                className="ui input"
                placeholder="Prénom"
                value={this.state.value}
            />
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