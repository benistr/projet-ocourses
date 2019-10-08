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
        name: '',
        surname: '',
        email: '',
        password: '',
    };
}

handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(handleChange);
}

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
}

    render() {
        const { name, surname, email, password } = this.state
        return (
            <div className='logContainer'>
                <h1>S'enregristrer</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <form onSubmit={this.handleSubmit}>
            <Input
                name="name"
                type=""
                className="ui input"
                placeholder="Nom"
                // Duo de props pour faire une input contrôlé :
                value={name}
                onChange={this.handleChange}
            />
            <Input
                name="surname"
                type=""
                className="ui input"
                placeholder="Prénom"
                // Duo de props pour faire une input contrôlé :
                value={surname}
                onChange={this.handleChange}
            />
            <Input
                name="email"
                type=""
                className="ui input"
                placeholder="E-mail"
                // Duo de props pour faire une input contrôlé :
                value={email}
                onChange={this.handleChange}
            />
            <Input
                name="password"
                type=""
                className="ui input"
                placeholder="Mot de Passe"
                // Duo de props pour faire une input contrôlé :
                value={password}
                onChange={this.handleChange}
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