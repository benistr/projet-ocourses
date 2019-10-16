import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as jwtDecode from 'jwt-decode';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class CreatedRack extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isConnected: false,
      rack: props.rack,
      itemList: props.itemList,
      
    }
    if(window.localStorage.getItem('cool-jwt') === null){
      console.log('pas de jwt');
  } else {
      console.log('jwt detécté')
      let userId= jwtDecode((window.localStorage.getItem('cool-jwt')));
      console.log(userId._id);
      this.state.isConnected = true,
      console.log('state de CreatedRack après connexion', this.state)    
  }
  }

  handleFav = (itemId) => {
    let userId = jwtDecode((window.localStorage.getItem('cool-jwt')))
    console.log('test d\'acces à userId', userId._id )
      this.props.clickOnFav( userId._id, itemId );
      this.setState({...this.state, itemList: this.props.itemList})
  }  

  handleDelete = (itemId) => {
    this.props.deleteItem(itemId);
    this.setState({ ...this.state, itemList: this.props.itemList})
  }

  onDragEnd = result => {
    //TODO reorder our column
  }
  
  /**
   * TODO
   * Supprimer le rack quand il n'y a aucun item dedans
   * synchroniser le state avec les clicks car actuellement ca ne synchronise que lorsque qu'un item est soumis via le form
   */

   render(){
     console.log('dans le render de CreatedRack', this.state)
        {/* Bloc de catégorie */}
        return <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="category">
        <h3>{this.state.rack}</h3>
          <Droppable droppableId={this.props.rack.id}>
          {(provided) => (
            <ul className="items" 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            >
                    { this.state.itemList.map( (item, index) => {
                        // console.log("item general", item);
                        const favStar= item.fav ? 'star' : 'star outline';
                       
                        if(item.rack === this.state.rack){
                            // console.log("item filtré par rack", item);
                            return <Draggable draggableId={this.props.item.id} index={this.props.index}>
                            {(provided) => (
                            <li key={item.product} item={item} index={index}>
                                <ul className="itemDetails"
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}>
                                    <li>
                                        <span className="categoryInput name">{item.product}</span>
                                        <span className="categoryInput quantity">{item.quantity}</span>
                                        <span className="categoryInput favorite"><Icon name={favStar} onClick={ () => this.handleFav(item.id) }/> 
                                        <Icon name="delete" onClick={() => {this.handleDelete(item.id)} }/></span>
                                    </li>
                                </ul>
                            </li>
                            ) }
                            </Draggable>
                        }
                    })

                    }
                    {provided.placeholder}
                    </ul>
                    )}
                    </Droppable>
    </div>
    </DragDropContext>
   }

}


// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => {
      return {
        ...state
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        clickOnFav: (userId, itemId) => {
            console.log('click sur fav ', userId, itemId);
          dispatch( {type: "CLICK_FAV", value: {user: userId, item: itemId}} );
        },
        deleteItem: (id) => {
          console.log('dans deleteItem id: ', id);
        dispatch( {type: "DELETE_ITEM", value: id} );
      }
        
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const CreatedRackContainer = connectionStrategies(CreatedRack);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  export default CreatedRackContainer;