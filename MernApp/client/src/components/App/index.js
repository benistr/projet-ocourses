/**
 * Import
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * Local import
 */

import Header from 'src/components/Header';
import { updateInputValue } from 'src/store/reducer';
import Footer from 'src/components/Footer';
import UserAccount from 'src/components/UserAccount';

// Composants enfants éventuels

import Log from 'src/components/Log';
import Lists from 'src/components/Lists';
import Main from 'src/components/Main';

// Styles et assets

import './app.sass';


<<<<<<< HEAD


=======
>>>>>>> 7b44d89a6a25598bf2c500fedd6fc2ce5a788ef8
// App Component

// ATTENTION : penser à importer et mettre en place la balise Router dans le index.js du dossier src
// Import de Router, Switch et Route et mise en place des routes avec les premiers composants
// Le Header et le Footer sont en dehors du Switch car ce sont des éléments récurrents et fixes
// ATTENTION à la priorisation des chemins. Si l'on met le path "Main" en premier, la priorité va être donnée à ce chemin et les autres ne pourront pas s'afficher
// Main ou Home est donc à mettre en dernier avant la clôture du Switch
// Pour ne plus se soucier de la priorisation : utiliser la mention EXACT pour la Home / Main
const App = () => {
    return (
        <Router>
        <div id="app">
        <Header />
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/listes" component={Lists} />
        <Route path="/login" component={Log} />
<<<<<<< HEAD
        <Route path="/account" component={UserAccount} />
=======
        <Route path="/useraccount" component={UserAccount} />
>>>>>>> 7b44d89a6a25598bf2c500fedd6fc2ce5a788ef8
        </Switch>
        <Footer />
        </div>
        </Router>
    )
}


App.propTypes = {
  /** Titre de l'application React */
  title: PropTypes.string.isRequired
};

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      title: ownProps.title,
      greeting: state.greetingMessage
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleChange: (event) => {
        dispatch(updateInputValue(event.target.value));
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;