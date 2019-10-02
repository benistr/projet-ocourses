import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './styles.scss';
import Janvier from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Janvier.jpg';
import Février from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Février.jpg';
import Mars from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Mars.jpg';
import Avril from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Avril.jpg';
import Mai from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Mai.jpg';
import Juin from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Juin.jpg';
import Juillet from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Juillet.jpg';
import Aout from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Aout.jpg';
import Septembre from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Septembre.jpg';
import Octobre from '/var/www/html/projet-Ocourses/MernApp/client/src/components/Season/Octobre.jpg';



const Season = () => {
   
    return  <div className="mainContainer">
            <p className="navigation">▶ Accueil ▶ Mes fruits et légumes de saison</p>
                <div className="mainContent">
                    <a href="">
                    <div className="title">Janvier</div>
                    <img className="box" src={Janvier}></img> 
                        <Responsive minWidth={1024}>
                        </Responsive>
                    </a>
                </div>
            
                <div className="mainContent">
                    <a href="">
                    <div className="title">Février</div>
                    <img className="box" src={Février}></img>
                        <Responsive minWidth={1024}>
                        </Responsive>
                    </a>
                </div>

                <div className="mainContent">
                    <a href="">
                    <div className="title">Mars</div>
                    <img className="box" src={Mars}></img>
                        <Responsive minWidth={1024}>
                        </Responsive>
                    </a>
                </div>

                <div className="mainContent">
                    <a href="">
                    <div className="title">Avril</div>
                    <img className="box" src={Avril}></img>
                        <Responsive minWidth={1024}>
                        </Responsive>
                    </a>
                </div>

                <div className="mainContent">
                    <a href="">
                    <div className="title">Mai</div>
                    <img className="box" src={Mai}></img>
                        <Responsive minWidth={1024}>
                        </Responsive>
                    </a>
                </div>

                <div className="mainContent">
                    <a href="">
                    <div className="title">Juin</div>
                    <img className="box" src={Juin}></img>
                        <Responsive minWidth={1024}>
                        </Responsive>
                    </a>
                </div>

            <div className="mainContent">
                <a href="">
                <div className="title">Juillet</div>
                <img className="box" src={Juillet}></img>
                    <Responsive minWidth={1024}>
                    </Responsive>
                </a>
            </div>

            <div className="mainContent">
                <a href="">
                <div className="title">Aout</div>
                <img className="box" src={Aout}></img>
                    <Responsive minWidth={1024}>
                    </Responsive>
                </a>
            </div>

            <div className="mainContent">
                <a href="">
                <div className="title">Septembre</div>
                <img className="box" src={Septembre}></img>
                    <Responsive minWidth={1024}>
                    </Responsive>
                </a>
            </div>

            <div className="mainContent">
                <a href="">
                <div className="title">Octobre</div>
                <img className="box" src={Octobre}></img>
                    <Responsive minWidth={1024}>
                    </Responsive>
                </a>
            </div>

            </div>
};

export default Season;