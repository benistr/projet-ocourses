export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  greetingMessage: 'Bonjour depuis le store !',
  update: false,
  itemsOnList: []
};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE: {
      return {
        ...state,
        greetingMessage: action.value
      }
    }
    //Gestion de la suppression d'un tâche 
    case 'DELETE_ITEM': {
      let updatedItemsOnList = state.itemsOnList;
      console.log('suppression item id:', action.value);
      for (let i=0; i <= updatedItemsOnList.length -1; i++) {
        console.log("dans le for de delete_item");
          if(updatedItemsOnList[i].id == action.value){
            console.log("item identique trouvé", updatedItemsOnList[i])
            updatedItemsOnList.splice(i, 1);
          }
        }
      console.log("itemsOnListe suite suppression: ", updatedItemsOnList);
      // console.log('tableau après suppression :',updatedTasks);
      return {
        ...state,
        itemsOnList: updatedItemsOnList,
        update: !state.update,
        
      }
    }
    case 'ADD_ITEM_TO_LIST': {
      let updatedItemsOnList = state.itemsOnList;
      updatedItemsOnList.push(action.value);
      console.log("itemsOnListe suite ajout: ", updatedItemsOnList);
      
      return {
        ...state,
        itemsOnList: updatedItemsOnList
      }
    }
    case "CLICK_FAV" : {
      let updatedItemsOnList = state.itemsOnList;
      console.log('dans reducer action CLICK_FAV');
      for (let i=0; i <= updatedItemsOnList.length -1; i++) {
        console.log("dans le for de click_fav");
          if(updatedItemsOnList[i].id == action.value){
            console.log("item identique trouvé", updatedItemsOnList[i])
            console.log(updatedItemsOnList[i].fav);
            updatedItemsOnList[i].fav = !updatedItemsOnList[i].fav
            console.log('suite maj: updatedItemsOnList:', updatedItemsOnList)
          }
        }
      return {
        ...state,
        itemsOnList: updatedItemsOnList,       
      }
    }
    default: {
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return { ...state };
    }
  }
};

export default reducer;

export const updateInputValue = value => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
};

export const sideEffect = () => ({ type: SIDE_EFFECT });
