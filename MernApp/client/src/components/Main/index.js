import React from 'react';
import { Button, Responsive, Image } from 'semantic-ui-react';

//Local imports
import './styles.sass';

const Main = () => {
   
    return <div className="mainContainer">
                <div className="mainContent">
                    <div className="title"> Fruits et légumes de saison</div>
                    <div className="legumes"> Légumes </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> Recettes </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> Blue</div>
                </div>

                <div className="mainContent">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette">Red</div>
                </div>
            </div>
            
};

export default Main;