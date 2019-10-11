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
import { cpus } from 'os';

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

handleChange = () => {
    console.log( 'onchange!', event.target.name, event.target.value);
    console.log(this.state)
    this.setState({
        [event.target.name]: event.target.value,
    });
    
}

handleSubmit = () => {
    event.preventDefault();
    axios.post('http://localhost:8800/api/user/login' , ({user : this.state }))
        .then(res => { console.log('reponses', res);
        localStorage.setItem('cool-jwt:', res.data.token);
        this.props.history.push('/');
        })
    
}

    render() {
        return (
            <div className='logContainer'>
                <h1>Se connecter</h1>
            <img className="img-log" src={Logo}></img> 
            <br></br>
            <form onSubmit={(event) => this.handleSubmit()}>
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