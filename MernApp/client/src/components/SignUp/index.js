import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import axios from 'axios';

/**
* Local import
*/
import Logo from '../../../../../Ressources/Images/logo.png';

// Composants enfants éventuels


// Styles et assets
import './styles.sass';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };
    console.log('dans le form history:',this.props.history)
}

handleChange = () => {
    this.setState({
        [event.target.name]: event.target.value,
    });
    
}

handleSubmit = () => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8800/api/user/register' , { user: this.state })
        .then(res => {console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('name', res.data.user.name)
        this.props.history.push('/');
        })
        
    }


    render() {
        return (
            <div className='logContainer'>
                <h1>S'enregristrer</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <form onSubmit={(event) => this.handleSubmit()}>

            <Input
                name="name"
                type="text"
                className="ui input"
                placeholder="Nom"
                value={this.state.value}
                onChange={(event) => this.handleChange()}
            />
            <Input
                name="surname"
                type="text"
                className="ui input"
                placeholder="Prénom"
                value={this.state.value}
                onChange={(event) => this.handleChange()}
            />
            <Input
                name="email"
                type="email"
                className="ui input"
                placeholder="E-mail"
                value={this.state.value}
                onChange={(event) => this.handleChange()}
            />
            <Input
                name="password"
                type="password"
                className="ui input"
                placeholder="Mot de Passe"
                value={this.state.value}
                onChange={(event) => this.handleChange()}
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
