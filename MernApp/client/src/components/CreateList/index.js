import React from 'react'
import { Icon } from 'semantic-ui-react';

//Local import 
import './CreateList.scss';



class CreateList extends React.Component{
    state = {
        itemList: []
    };

    newItem = {};


    handleSubmit = () => {
        console.log('test');
        let newItemList = this.state.itemList.slice();
        newItemList.push(this.newItem)
        console.log(newItemList);
        this.setState({ itemList: newItemList });
        console.log(this.state);
    }  
    

    handleChange = () => {
        console.log('change!');
        console.log(event.target.value);
        console.log(event.target.id);
        this.newItem = {...this.newItem, [event.target.id] : event.target.value};
        console.log(this.newItem);
    }
    
    

    render() {
      return  <div className="mainContainer">
 
       {/* Input de recherche */}
         <form className="inputs" onSubmit= { (e) => { 
             e.preventDefault();
             this.handleSubmit() }}>
         <input type="text" className="input" icon="search" placeholder="Produit recherché..." name="product" id="product" onChange={this.handleChange}/>
         <select className="input" icon="cart" name="rack" id="rack" onChange={this.handleChange} >
             <option value="">--Categorie / Rayon--</option>
             <option value="Surgelés">Surgelés</option>
             <option value="Fruits &amp; Légumes">Fruits &amp; Légumes</option>
             <option value="Confiserie">Confiserie</option>
             <option value="Biscuits">Biscuits</option>
             <option value="Produits Ménagers">Produits Ménagers</option>
             <option value="Alcool">Alcool</option>
         </select>
         <input type="text" className="input" icon="" placeholder="Quantité" name="quantity" id="quantity" onChange={this.handleChange}/>
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
}

export default CreateList;