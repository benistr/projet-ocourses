import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './styles.scss';


const Lists = () => {
   
    return  <div className="mainContainer">
            <p className="navigation">▶ Accueil ▶ Listes</p>
                <div className="mainContent"><a href="">
                    <div className="title">Carrefour</div>
                    <div className="legumes"> 
                        <div className="summary">
                        <p className="summary-title">Ma liste Carrefour</p>
                        <Responsive minWidth={1024}>
                            <ul className="recipe-items">
                                <li>- 1 tomate </li>
                                <li>- 6 bières </li>
                                <li>- 1 liquide vaisselle </li>
                                <li>- 2 poivrons </li>
                                
                        </ul> 
                        </Responsive>
                        </div>
                    </div>
                    </a>
                </div>

                <div className="mainContent"><a href="">
                <div className="title">Ikea</div>
                <div className="legumes"> 
                    <div className="summary">
                    <p className="summary-title">Découvrez les fruits & légumes du mois</p>
                    <Responsive minWidth={1024}>
                        <ul className="recipe-items">
                            <li>- 1 étagère Klax </li>
                            <li>- 1 commode Malm </li>
                            <li>- 1 cadre </li>
                            <li>- 2 bougies </li>
                            
                    </ul> 
                    </Responsive>
                    </div>
                </div>
                </a>
            </div>

            </div>
            
};

export default Lists;