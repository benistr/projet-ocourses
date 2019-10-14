import axios from "axios";

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  itemList: [],
  newItem: {},
  rackList: [],
  connectedUser: {
    name: "",
    surname: "",
    email: "",
  }
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
    case 'USER_CONNECTED': {
      console.log('dans connected user')
      axios.get(`http://localhost:8800/api/user/getuser/${action.value}`)
      .then(res => {
        console.log('voila la réponses suite à connected user', res.data)
        // const NewconnectedUser = {
        //   name: res.data.name,
        //   surname: res.data.surname,
        //   email: res.data.email
        // }
        // console.log('après recup de la réponse dans le reducer', NewconnectedUser)
      return {
        ...state,
        connectedUser: {...state.connectedUser, name: res.data.name, surname: res.data.surname, email: res.data.email},
      }
    })
    }
    case 'NEW_RACK': {
      let newRackList = state.rackList.push(action.value);
      return {
        ...state,
        rackList: newRackList
      }
    }
    //Gestion de la suppression d'un tâche 
    case 'DELETE_ITEM': {
      let updatedItemList = state.itemList;
      console.log('suppression item id:', action.value);
      for (let i=0; i <= updatedItemList.length -1; i++) {
        console.log("dans le for de delete_item");
          if(updatedItemList[i].id == action.value){
            console.log("item identique trouvé", updatedItemList[i])
            updatedItemList.splice(i, 1);
          }
        }
      console.log("itemsOnListe suite suppression: ", updatedItemList);
      // console.log('tableau après suppression :',updatedTasks);
      return {
        ...state,
        itemsOnList: updatedItemList,
        
      }
    }
    case 'ADD_ITEM_TO_LIST': {
      console.log('add idem, recu : ', action.value)
      let updatedItemList = state.itemList;
      updatedItemList.push(action.value);
      console.log("itemList suite ajout: ", updatedItemList);
      let newRackList = state.rackList.slice();
      if(newRackList.filter( name => name == action.value.rack).length>0 ) {
        console.log('le rayon existe');                
        } else {  
    console.log('le rayon n\'existe pas');
    newRackList.push(action.value.rack);       
}
      console.log("sortie du if de verif de rack",updatedItemList);
      return {
        ...state,
        itemList: updatedItemList,
        rackList: newRackList,
        newItem: {}
      }
    }
    case "CLICK_FAV" : {
      let updatedItemList = state.itemList;
      console.log('dans reducer action CLICK_FAV');
      for (let i=0; i <= updatedItemList.length -1; i++) {
        console.log("dans le for de click_fav");
          if(updatedItemList[i].id == action.value){
            console.log("item identique trouvé", updatedItemList[i])
            console.log(updatedItemList[i].fav);
            updatedItemList[i].fav = !updatedItemList[i].fav
            console.log('suite maj: updatedItemList:', updatedItemList)
          }
        }
      return {
        ...state,
        itemsOnList: updatedItemList,       
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
