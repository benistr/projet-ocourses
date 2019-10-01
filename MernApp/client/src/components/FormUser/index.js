import React from 'react';
import { Button, Form } from 'semantic-ui-react'

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

                <h1 className="form-text">Mon Compte</h1> 
                <img className="form-logo" src={Logo}/>
                
                
    
            <Form className="form">
            
                <Form.Field className="input-style">
                  <input placeholder='Votre prénom' 
                  onChange={handleChange('firstName')}

                  />
                </Form.Field>

                <Form.Field className="input-style">
                  <input placeholder='Votre nom' />
                </Form.Field>

                <Form.Field className="input-style">
                  <input placeholder='Votre email' />
                </Form.Field>   

                <Button className="buttonForm" type='submit'>Déconnexion</Button>
  
            </Form>
            </div>
                
          
        );
    }
}

export default FormUser;