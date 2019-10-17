import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './team.scss';


const Team = () => {
   
    return  <div className="mainContainer">
            <p className="navigation">▶ Accueil ▶ Qui sommes-nous ?</p>

                <div className="mainContent">
                    <div className="summary-title-team">Myriam</div>
                        <div className="salade"> 
                        <div className="summary-team">
                        <p className="title-team">Support Dev Back</p>
                        </div>
                        <div className="summary-team">
                        <p className="title-team">Support Dev Front</p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="summary-title-team">Benjamin</div>
                        <div className="raclette"> 
                            <div className="summary-team">
                            <p className="title-team">Product Owner</p>
                            </div>
                            <div className="summary-team">
                            <p className="title-team">Support Dev Back</p>
                        </div>
                    </div>
                </div>

                <div className="mainContent">
                    <div className="summary-title-team">Kévin</div>
                        <div className="raclette"> 
                            <div className="summary-team">
                            <p className="title-team">Lead Dev Back</p>
                            </div>
                            <div className="summary-team">
                            <p className="title-team">Brain Master</p>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="summary-title-team">Dorian</div>
                        <div className="burger"> 
                            <div className="summary-team">
                            <p className="title-team">Lead Dev Front</p>
                            </div>
                            <div className="summary-team">
                            <p className="title-team">Web Designer</p>
                        </div>    
                    </div>
                </div>

            </div>
            
};

export default Team;