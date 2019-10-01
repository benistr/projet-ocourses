import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './team.scss';


const Team = () => {
   
    return  <div className="mainContainer">
            <p className="navigation">▶ Accueil ▶ Qui Sommes-nous?</p>
                <div className="mainContent">
                    <div className="title"> Product Owner</div>
                    <div className="legumes"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Benjamin<p className="title-team">-Product Owner</p></p>
                        </div>
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Scrum Master</div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Kévin<p className="title-team">-Scrum Master</p></p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Lead Dev Back</div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Myriam<p className="title-team">-Lead Dev Back</p></p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Lead Dev Front</div>
                    <div className="recette"> 
                        <div className="summary-team">
                        <p className="summary-title-team">Dorian<p className="title-team">-Lead Dev Front</p></p>
                        </div>    
                    </div>
                </div>

            </div>
            
};

export default Team;