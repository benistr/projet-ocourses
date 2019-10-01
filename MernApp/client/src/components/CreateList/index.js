import React from 'react'
import { Input } from 'semantic-ui-react';

//Local import 
import './styles.scss';


const CreateList =() => {
      return  <div className="mainContainer">
        <div className="inputs">
        <Input className="input" icon="search" placeholder="Produit recherché..." />
        <Input className="input" icon="cart" placeholder="Categorie / Rayon" />
        <Input className="input" icon="" placeholder="Quantité" />
        </div>
    </div>
    
}

export default CreateList;