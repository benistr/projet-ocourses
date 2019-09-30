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
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> 
                        <div className="summary">
                        <p className="summary-title">Titre de la recette</p>
                        
                        <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            
                        </ul>
                        </Responsive>
                        </div>    
                    </div>
                    </a>
                </div>

                <div className="mainContent"><a href="">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> 
                        <div className="summary">
                        <p className="summary-title">Titre de la recette</p>
                        <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            
                        </ul>
                        </Responsive>
                        </div>    
                    </div>
                    </a>
                </div>

                <div className="mainContent"><a href="">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> 
                        <div className="summary">
                        <p className="summary-title">Titre de la recette</p>
                        <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            
                        </ul>
                        </Responsive>
                        </div>    
                    </div>
                    </a>
                </div>

            </div>
            
};

export default Main;