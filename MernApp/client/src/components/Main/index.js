import React from 'react';


//Local imports
import './styles.scss';

const Main = () => {
   
    return <div className="mainContainer">
                <div className="mainContent">
                    <div className="title"> Fruits et légumes de saison</div>
                    <div className="legumes"> 
                        <div className="summary">
                        
                            <ul className="recipe-items">
                                <li>- Légume </li>
                                <li>- Légume </li>
                                <li>- Légume </li>
                                <li>- Légume </li>
                                
                        </ul> 
                        </div>
                    </div>
                    
                </div>

                <div className="mainContent">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> 
                        <div className="summary">
                        <p className="summary-title">Titre de la recette</p>
                        <ul className="recipe-items">
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            
                        </ul>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> 
                        <div className="summary">
                        <p className="summary-title">Titre de la recette</p>
                        <ul className="recipe-items">
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            
                        </ul>
                        </div>    
                    </div>
                </div>

                <div className="mainContent">
                    <div className="title"> Recette suggérée</div>
                    <div className="recette"> 
                        <div className="summary">
                        <p className="summary-title">Titre de la recette</p>
                        <ul className="recipe-items">
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            <li>- Ingrédient</li>
                            
                        </ul>
                        </div>    
                    </div>
                </div>

                <div className="addAList">
                    <p className="buttonLabel">Ajouter une nouvelle Liste </p>
                    <button className="createListButton">+</button>
               </div>
               
            </div>
            
};

export default Main;