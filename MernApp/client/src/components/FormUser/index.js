import React from 'react';
import { Input } from 'semantic-ui-react';
import * as jwtDecode from 'jwt-decode';
import axios from 'axios';

import './style.scss';

/**
* Local import
*/
import Logo from './logo.png';


class FormUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname:"",
            email: "",
        }
        console.log('state', this.state)
        if(window.localStorage.getItem('cool-jwt') === null){
            console.log('pas de jwt');
        } else {
            console.log('jwt detécté')
            let userId= jwtDecode((window.localStorage.getItem('cool-jwt')));
            console.log(userId._id);
            axios.get(`http://localhost:8800/api/user/getuser/${userId._id}`)
                    .then(res => {
                    console.log('voila la réponses suite à connected user', res.data)
                    this.setState({...this.state, isConnected : true,
                    name: res.data.name,
                    surname: res.data.surname,
                    email: res.data.email,})
                    console.log('state après connexion', this.state)
                    console.log(this.state.isConnected)
                })
            
        }
    }

logOut = () => {
    window.localStorage.removeItem('cool-jwt');
    this.props.history.push('/');
    }

    render() {
        return (
            <div className="logContainer">
                <h1 className="form-text">Mon Compte</h1> 
                <img className="img-log" src={Logo}/>

                <label>Nom</label>
                {this.state.isConnected && 
                    <Input
                    name="name"
                    type="text"
                    className="ui input"
                    placeholder="Nom"
                    value={this.state.name}
                    />
                }
                <br></br>
                <label className="label">Prénom</label>
                {this.state.isConnected && 
                    <Input
                    name="name"
                    type="text"
                    className="ui input"
                    placeholder="Nom"
                    value={this.state.surname}
                    />
                }
                <br></br>
                <label className="label">E-mail</label>
                {this.state.isConnected && 
                    <Input
                    name="name"
                    type="text"
                    className="ui input"
                    placeholder="Nom"
                    value={this.state.email}
                    />
                }
                    <form>
                        <button type="submit" className="ui button">
                        Modifier vos informations
                        </button>
                        <button type="submit" className="ui button">
                        Modifier votre mot de passe
                        </button>
                        <button onSubmit={this.logOut} type="submit" className="ui red button">
                        Déconnexion
                        </button>
                    </form>
            </div>  
          
        );
    }
}

export default FormUser;