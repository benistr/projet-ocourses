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
            <form method='POST' action='/user/register'>
            <Input
                type=""
                className="ui input"
                placeholder="Nom"
                // Duo de props pour faire une input contrôlé :
                value={this.state.value}
                onChange={(event, newValue) => 
                this.setState({name:newValue})}
            />
            <Input
                type=""
                className="ui input"
                placeholder="Prénom"
                // Duo de props pour faire une input contrôlé :
                value={this.state.value}
                onChange={(event, newValue) => 
                this.setState({surname:newValue})}
            />
            <Input
                type=""
                className="ui input"
                placeholder="E-mail"
                // Duo de props pour faire une input contrôlé :
                value={this.state.value}
                onChange={(event, newValue) => 
                this.setState({email:newValue})}
            />
            <Input
                type=""
                className="ui input"
                placeholder="Mot de Passe"
                // Duo de props pour faire une input contrôlé :
                value={this.state.value}
                onChange={(event, newValue) => 
                this.setState({password:newValue})}
            />
                <button type="submit" className="ui button" onClick={(event) =>
                this.handleClick(event)}>
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