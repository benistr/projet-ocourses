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
                        <p className="summary-title-team">Benjamin</p>
                        <p className="title-team">Product Owner</p>
                        </div>
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"></div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Kévin</p><p className="title-team">Project Manager</p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"></div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Myriam</p><p className="title-team">Lead Dev Back</p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"></div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Dorian</p><p className="title-team">Lead Dev Front</p>
                        </div>    
                    </div>
                </div>

            </div>
            
};

export default Team;