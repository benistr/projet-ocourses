import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

//Local imports
import './styles.scss';

const Main = () => {
    
        return <div className="mainContainer">
            <p className="navigation">▶ Accueil</p>
            <div className="topSpeech"><p className="description"><h2 className="slogan">On ne poussera pas votre caddie, mais on vous aide pour le reste !</h2>
            <br></br><br></br>Mais alors dis-moi Jamy, qu'est-ce que c'est O'Courses ?
            <br></br><br></br>O'Courses, c'est l'application qui va vous faciliter la vie en vous permettant de créer et gérer vos listes de courses. Vous passerez moins de temps à faire les courses, et plus de temps à manger !</p>
            </div>
                    <div className="mainContent"><NavLink to="/saisons">
                        <div className="title">Octobre</div>
                        <div className="legumes"> 
                            <div className="summary">
                            <p className="summary-title">Découvrez les fruits & légumes du mois</p>
                            <Responsive minWidth={1024}>
                            </Responsive>
                            </div>
                        </div>
                        </NavLink>
                    </div>

                <div className="mainContent"><a href="">
                <div className="title">Lasagnes à l'italienne</div>
                <div className="lasagnes"> 
                    <div className="summary">
                    <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- 1 Carotte </li>
                            <li>- 1 Branche de céleri </li>
                            <li>- 800gr hâché mélangé </li>
                            <li>- Sauce tomate </li>
                            
                        </ul>
                        </Responsive>
                        </div>    
                    </div>
                    </a>
                </div>

                <div className="mainContent"><a href="">
                    <div className="title">Crêpes au suc'</div>
                    <div className="crepes"> 
                        <div className="summary">
                        <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- 300gr de farine</li>
                            <li>- 3 oeufs</li>
                            <li>- 50gr de beurre fondu</li>
                            <li>- 60cl de lait</li>
                            <li>- Du suc'</li>
                        </ul>
                        </Responsive>
                        </div>    
                    </div>
                    </a>
                </div>

                <div className="mainContent"><a href="">
                    <div className="title">Pizza maison</div>
                    <div className="pizza"> 
                        <div className="summary">
                        <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- Mortadelle</li>
                            <li>- 1 poivron</li>
                            <li>- 3 champignons</li>
                            <li>- Mozzarella</li>
                            
                        </ul>
                        </Responsive>
                        </div>    
                    </div>
                    </a>
                </div>

            </div>
            
};

export default Main;