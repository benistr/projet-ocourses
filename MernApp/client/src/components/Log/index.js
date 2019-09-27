import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'semantic-ui-react';

/**
* Local import
*/
import Logo from '../../../../../Ressources/Images/logo.png';

// Composants enfants éventuels
import LoginInput from 'src/components/LoginInput';

// Styles et assets
import './app.sass';

class App extends Component {
 state = {
   email: '',
   password: '',
   color: 'red',
   promo: 'Titan'
 }

 // Usine à callbacks pour les événements de type 'change' sur les <Field />.
 updateField = fieldName => event => {
   this.setState({ [fieldName]: event.target.value })
 }


 sendRequest = (event) => {
   event.preventDefault();
 
   // On déclenche un POST et on obtient immédiatement un objet,
   // la promesse, qui modélise la future réponse qu'on obtiendra.
   const promise = axios.post('http://localhost:3001/login', {
     email: this.state.email,
     password: this.state.password
   });
 
   promise.then(this.handleResponse);
 }
 
 handleResponse = (response) => {
   console.log(response);
   // this.setState({
   //   message: 'Identifiants invalides'
   // })
 }

 render() {

   const fieldsJSX = this.props.form.map(field => {
     return <div> <img src={Logo}></img>
     <Input
       key={field.name}
       type={field.type}
       className="ui input"
       placeholder={field.placeholder}
       // Duo de props pour faire une input contrôlé :
       value={this.state[field.name]}
       onChange={this.updateField(field.name)}
     />
     </div>
   })

   return <div className="app">
     <form onSubmit={this.sendRequest}>
       {fieldsJSX}
       <button type="submit" className="ui button">
         Connexion
       </button>
       <button type="cancel" className="ui button">
         Annuler
       </button>
     </form>
     <small>Pas encore de compte ?</small>
     <p>Créer un compte</p>
   </div>
 }
};
/**
 * Export
 */
export default App;
