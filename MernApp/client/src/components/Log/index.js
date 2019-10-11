//import React, { Component } from 'react';
import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import api from '../services/api';

/**
* Local import
*/
import Logo from '../../../../../Ressources/Images/logo.png';

// Composants enfants éventuels


// Styles et assets
import './styles.sass';

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');

        const response = await api.post('/auth/login', {
            email: email,
            password: password
        })
        console.log(response);

        const { _id } = response.data.user;
        
        localStorage.setItem('user', _id);

        history.push('/listes');

    }

    return (
        <div className='logContainer'>
            <h1>Se connecter</h1>
        <img className="img-log" src={Logo}></img> 
        <br></br>
        <form onSubmit={handleSubmit}>
        <Input
            name="email"
            type="email"
            className="ui input"
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
        />
        <Input
            name="password"
            type="password"
            className="ui input"
            placeholder="Mot de Passe"
            value={password}
            onChange={event => setPassword(event.target.value)}
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
    )
}


