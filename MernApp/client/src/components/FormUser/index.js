import React from 'react';
import { Input } from 'semantic-ui-react';
import * as jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
            redirect: false
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
    this.setState({redirect: true});
    }

editProfile = () => {
    this.newState = {
        name: "",
        surname: "",
        email: ""
    }
    axios.post(`http://localhost:8800/api/user/edituser/${userId._id}`, {user: this.newState })
    .then(res)
    localStorage.setItem('name', res.data.user.name);
}

    render() {

        if(this.state.redirect){
            return (<Redirect to={'/login'}/>)
        }

        return (
            <div className="formContainer">
                <h1 className="form-text">Mon Compte</h1> 
                <img className="img-log" src={Logo}/>

                <label>Nom : {this.state.name}</label>
                {this.state.isConnected && 
                    <Input
                    name="name"
                    type="text"
                    className="ui input"
                    placeholder="Nom"
                    value={this.state.value}
                    />
                }
                <br></br>
                <label className="label">Prénom : {this.state.surname}</label>
                {this.state.isConnected && 
                    <Input
                    name="name"
                    type="text"
                    className="ui input"
                    placeholder="Prénom"
                    value={this.state.value}
                    />
                }
                <br></br>
                <label className="label">E-mail : {this.state.email}</label>
                {this.state.isConnected && 
                    <Input
                    name="name"
                    type="text"
                    className="ui input"
                    placeholder="Email"
                    value={this.state.value}
                    />
                }
                    <form>
                        <button onClick={this.editProfile} type="submit" className="ui button">
                        Modifier vos informations
                        </button>
                        <button type="submit" className="ui button">
                        Modifier votre mot de passe
                        </button>
                        <button onClick={this.logOut} type="submit" className="ui red button">
                        Déconnexion
                        </button>
                    </form>
            </div>  
          
        );
    }
}

export default FormUser;