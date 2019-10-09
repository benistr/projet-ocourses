import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './team.scss';


const Team = () => {
   
    return  <div className="mainContainer">
            <p className="navigation">▶ Accueil ▶ Qui sommes-nous ?</p>
                <div className="mainContent">
                    <div className="title"></div>
                    <div className="legumes"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Benjamin<p className="title-team">Product Owner</p></p>
                        </div>
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"></div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Kévin<p className="title-team">Project Manager</p></p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"></div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Myriam<p className="title-team">Lead Dev Back</p></p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"></div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Dorian<p className="title-team">Lead Dev Front</p></p>
                        </div>    
                    </div>
                </div>

            </div>
            
};

export default Team;