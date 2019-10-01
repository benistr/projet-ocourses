import React from 'react'
import { Icon } from 'semantic-ui-react';

//Local import 
import './CreateList.scss';



const CreateList =() => {

    const racks = [];
    
      return  <div className="mainContainer">

      {/* Input de recherche */}
        <form className="inputs">
        <input type="text" className="input" icon="search" placeholder="Produit recherché..." />
        <select className="input" icon="cart" placeholder="" >
            <option value="">--Categorie / Rayon--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>
        <input type="text" className="input" icon="" placeholder="Quantité" />
        <button type="submit">Ajouter</button>
        </form>


        {/* Espaces pour les bloc de catégories */}
        <div className="categories">
        {/* A factoriser ! via un map? */}
        {/* Bloc de catégorie */}
            <div className="category">
                <h3>Surgelés</h3>
                    <ul className="items">
                        <li>
                            <ul className="itemDetails">
                            <li>
                                <span className="categoryInput name">Poisson Pané</span>
                                <span className="categoryInput quantity">4</span>
                                <span className="categoryInput favorite"><Icon name="star outline" /> <Icon name="delete" /></span>
                                
                            </li>
                            </ul>
                        </li>

                        <li>
                            <ul className="itemDetails">
                                <li>
                                    <span className="categoryInput name">Pizza Reine</span>
                                    <span className="categoryInput quantity">1</span>
                                    <span className="categoryInput favorite"><Icon name="star outline" /* Methode onclic pour changer la className et passer l'étoile en pleine si favori */ /> <Icon name="delete" /></span>
                                </li>
                            </ul>
                        </li>

                    </ul>
            </div>
        </div>
        
    </div>


    
}

export default CreateList;