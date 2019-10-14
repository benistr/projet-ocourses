import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import Fred from './fred2.png';
import Jamy from './jamy1.png';

//Local imports
import './styles.scss';


const Main = () => {
    
        return <div className="mainContainer">
            <p className="navigation">▶ Accueil</p>
                <div className="gradient-box">
                    <div className="topSpeech">
                    
                        <h2 className="slogan">On ne peut pas pousser pas votre caddie 
                        mais on peut vous aider pour le reste !</h2>
                        <div className="description">
                            <div className="fred">
                                <img className="fred-img" src={Fred}/>
                                <div className="fred-text">Mais alors dis-moi Jamy, qu'est-ce que c'est O'Courses ?</div>
                            </div>
                        
                            <div className="jamy">
                                <div className="jamy-text">O'Courses, c'est l'application qui va te faciliter la vie 
                                en te permettant de créer et gérer tes listes de courses. 
                                Parce que moins de temps à faire les courses,
                                c'est plus de temps pour manger !
                                </div>
                                <img className="jamy-img" src={Jamy}/>
                                
                                
                            </div>
                        </div>
                    </div>
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