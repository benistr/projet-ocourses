import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './styles.scss';


const Main = () => {
   
    return  <div className="mainContainer">
            <p className="navigation">▶ Accueil</p>
                <div className="mainContent"><a href="">
                    <div className="title"> Fruits et légumes de saison</div>
                    <div className="legumes"> 
                        <div className="summary">
                        <p className="summary-title">Découvrez les fruits & légumes du mois</p>
                        <Responsive minWidth={1024}>
                            <ul className="recipe-items">
                                <li>- Légume </li>
                                <li>- Légume </li>
                                <li>- Légume </li>
                                <li>- Légume </li>
                                
                        </ul> 
                        </Responsive>
                        </div>
                    </div>
                    </a>
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