import React from 'react';
import { Responsive } from 'semantic-ui-react';

//Local imports
import './lists.scss';

import Supprimer from './supprimer.png';
import Image from './oeuf.jpg';


const Lists = () => {
   
    return  <div className="container">
            <p className="path">▶ Accueil ▶ Listes</p>


                <div className="content"><a href="">
                    <ul className="title">Carrefour <img className="delete"src={Supprimer}/></ul>
                
                        <div className="summary-lists">
                        
                    
                            <ul className="list-lists">

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- tomates </li>
                                    <li className="item">500g</li>
                                </ul>

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- bières</li>
                                    <li className="item">500g</li>
                                </ul>

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- liquide vaisselle</li>
                                    <li className="item">500g</li>
                                </ul>

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- poivrons</li>
                                    <li className="item">500g</li>
                                </ul>
                            </ul> 
                  
                        </div>
                    
                    </a>
                </div>

                <div className="content"><a href="">
                    <ul className="title">Carrefour <img className="delete"src={Supprimer}/></ul>
                
                        <div className="summary-lists">
                        
                    
                            <ul className="list-lists">

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- tomates </li>
                                    <li className="item">500g</li>
                                </ul>

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- bières</li>
                                    <li className="item">500g</li>
                                </ul>

                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- liquide vaisselle</li>
                                    <li className="item">500g</li>
                                </ul>
                                
                                <ul className="list-infos">
                                    <li><img className="item" src={Image}/>- poivrons</li>
                                    <li className="item">500g</li>
                                </ul>
                            </ul> 
                  
                        </div>
                    
                    </a>
                </div>

            

            </div>
            
};

export default Lists;