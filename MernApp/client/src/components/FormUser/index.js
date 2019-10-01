import React from 'react';
import { Button, Form} from 'semantic-ui-react'

import './style.scss';

/**
* Local import
*/
import Logo from './logo.png';


class FormUser extends React.Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
    render() {
        // On récupères les props values de userAccount en les déstructurant
        const { values, handleChange } = this.props;
        return (
            <div className="userForm">

                <h1 className="form-text">Créez votre compte</h1> 
                <img className="form-logo" src={Logo}/>
                
    
            <Form className="form">
            
                <Form.Field className="input-style">
                  <label className="input-label" >Votre prénom</label>
                  <input placeholder='First Name' />
                </Form.Field>

                <Form.Field className="input-style">
                  <label className="input-label">Votre nom</label>
                  <input placeholder='Last Name' />
                </Form.Field>

                <Form.Field className="input-style">
                  <label className="input-label">Votre email</label>
                  <input placeholder='Email' />
                </Form.Field>

                <Button className="buttonForm" type='submit'>Déconnexion</Button>
            </Form>
            </div>
          
        );
    }
}

export default FormUser;