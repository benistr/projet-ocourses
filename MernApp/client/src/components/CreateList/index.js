import React from 'react'
import { Icon } from 'semantic-ui-react';
import CreatedList from 'src/components/CreatedList';
import CreatedRack from 'src/components/CreatedRack';


//Local import 
import './CreateList.scss';




class CreateList extends React.Component{
    state = {
        itemList: [],
        rackList: []
    };

    newItem = {};

// Méthode ajoutant le produit à la list des items du state.
    handleSubmit = () => {
        console.log('test');
        //On copie le tableau itemList de state puis on push le newItem dans ce tableau
        let newItemList = this.state.itemList.slice();
        newItemList.push(this.newItem)
        console.log(newItemList);
        //On fait une copie du tableau rackList du state
        let newRackList = this.state.rackList.slice();
        console.log("après le slice", newRackList)
        // On vérifie si le rayon du newItem exite dans le tableau rackList
        console.log("test handleCheck")
        this.handleCheck(newRackList, this.newItem.rack) 
            // console.log("dans HandleCheck et avant le push", newRackList);
            // //Si ce n'est pas le cas on le push dans le tableau newRackList
            // newRackList.push(this.newItem.rack)
            // console.log("dans handlCheck et après le push", newRackList)
        
        console.log(newRackList);
        // On met à jour le state en remplacant les state.itemList et state.RackList par newItemList et newRackList
        this.setState({ itemList: newItemList, rackList: newRackList});
        console.log(this.state);
    }  
    
//Méthode permettant d'intégrer les valeurs indiquées par l'User dans l'objet NewItem
    handleChange = () => {
        // console.log('change!');
        // console.log(event.target.value);
        // console.log(event.target.id);
        this.newItem = {...this.newItem, [event.target.id] : event.target.value};
        console.log(this.newItem);
    }
    
    //Methode vérifiant que le rayon n'existe pas déjà dans le tableau rackList la méthode some() renvoit un booléen si la condition est remplie
    handleCheck(array, rackName) {
        // return this.state.rackList.some(item => val.name === item.name);
        // Vérification avec array.filter()
        if(array.filter( name => name == rackName).length>0 ) {
            console.log("existe");          
    // Tu peux ajouter une valeur dans ton tableau            
            return array;
            } else { /* Error tu as déjà cette valeur dans ton tableau interdiction de l'ajouter*/ 
        console.log("existe pas");
        array.push(rackName);       
    }
  
       }

    render() {
      return  <div className="mainListContainer">
 
       {/* Input de recherche */}
         <form className="inputs" onSubmit= { (e) => { 
             e.preventDefault();
             this.handleSubmit() }}>
         <input type="text" className="input" icon="search" placeholder="Produit recherché..." name="product" id="product" onChange={this.handleChange}/>
         <select className="input" icon="cart" name="rack" id="rack" onChange={this.handleChange} >
             <option value="">--Categorie / Rayon--</option>
             <option value="Animaux">Animaux</option>
             <option value="Autres">Autres</option>
             <option value="Bébé">Bébé</option>
             <option value="Bio">Bio</option>
             <option value="Biscuits">Biscuits</option>
             <option value="Boissons alcoolisées">Boissons alcoolisées</option>
             <option value="Boissons">Boissons</option>
             <option value="Boulangerie">Boulangerie</option>
             <option value="Confiserie">Confiserie</option>
             <option value="Epicerie">Epicerie</option>
             <option value="Fruits &amp; Légumes">Fruits &amp; Légumes</option>
             <option value="Hygière">Hygiène</option>
             <option value="Poissons">Poissons</option>
             <option value="Produits frais">Produits frais</option>
             <option value="Produits Ménagers">Produits Ménagers</option>
             <option value="Surgelés">Surgelés</option>
             <option value="Viandes">Viandes</option>
             <option value="Viennoiseries">Viennoiseries</option>
         </select>
         <input type="text" className="input" icon="" placeholder="Quantité" name="quantity" id="quantity" onChange={this.handleChange}/>
         <button type="submit">Ajouter</button>
         </form>

        {this.state.rackList.map( rack => {
            console.log(rack);
           return <CreatedRack {...this.state}
           rack={rack} />
        })}
        
    </div>


    
}
}

export default CreateList;