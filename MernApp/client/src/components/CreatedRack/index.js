import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const CreatedRack = ({ rack, itemList }) => {

  console.log('dans created rack itemList', itemList);
  console.log('dans created rack rack', rack);

        {/* Bloc de catégorie */}
        return <div className="category">
        <h3>{rack}</h3>
            <ul className="items">
                    { itemList.map( item => {
                        // console.log("item general", item);
                        const favStar= item.fav ? 'star' : 'star outline';
                       
                        if(item.rack === rack){
                            // console.log("item filtré par rack", item);
                            return <li key={item.product}>
                                <ul className="itemDetails">
                                    <li>
                                        <span className="categoryInput name">{item.product}</span>
                                        <span className="categoryInput quantity">{item.quantity}</span>
                                        <span className="categoryInput favorite"><Icon name={favStar} onClick={ () => clickOnFav(item) }/> 
                                        <Icon name="delete" onClick={() => {deleteItem(item.id)} }/></span>
                                    </li>
                                </ul>
                            </li>
                        
                        }
                    })

                    }
                    </ul>
    </div>

}


// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => {
      return {
        itemList: state.itemList
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        clickOnFav: (item) => {
            console.log('click sur fav ', item);
          dispatch( {type: "CLICK_FAV", value: item.id} );
        },
        
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const CreatedRackContainer = connectionStrategies(CreatedRack);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  export default CreatedRackContainer;

