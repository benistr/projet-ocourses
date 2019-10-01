import React from 'react';
import { Button, Form} from 'semantic-ui-react'


class FormUser extends React.Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
    render() {
        // On récupères les props values de userAccount en les déstructurant
        const { values, handleChange } = this.props;
        return (
            <div classname="userForm">
            <Form className="form">
            
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>

                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>

                <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email' />
                </Form.Field>

                <Button className="buttonForm" type='submit'>Déconnexion</Button>
            </Form>
            </div>
          
        );
    }
}

export default FormUser;