import axios from "axios";

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  isConnected: false,
  itemList: [],
  newItem: {},
  rackList: [],
  favItems: [],
  connectedUser: {
    name: "",
    surname: "",
    email: "",
    favlist: [],
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
      let newIsConnected = state.isConnected;
      let newConnectedUser = state.connectedUser;
      let newFavItems = state.favItems

      axios.get(`http://localhost:8800/api/user/getuser/${action.value}`)
      .then(res => {
        console.log('voila la réponses suite à connected user', res.data, 'et la favlist', res.data.favlist)
        newConnectedUser = {
          name: res.data.name,
          surname: res.data.surname,
          email: res.data.email
        }
        newIsConnected = true;
        newFavItems = res.data.favList;
        console.log('après recup de la réponse dans le reducer', newConnectedUser, newFavItems, newIsConnected)
        return {
          ...state,
          isConnected: newIsConnected,
          favItems: newFavItems,
          connectedUser: { ...state.connectedUser, 
                          name: newConnectedUser.name,
                          surname: newConnectedUser.surname, 
                          email: newConnectedUser.email},
        
      }
      
      })
    
    };
    break;
    //soucis qui apparaissait au premier chargement de la page (rackList.push is not a function) résolu grâce au break
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
      console.log("itemList suite ajout: ", updatedItemList, 'rackList', state.rackList);
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
      console.log('click fav value', action.value, 'user', action.value.user)
      let updatedItemList = state.itemList;
      console.log('dans reducer action CLICK_FAV');
      for (let i=0; i <= updatedItemList.length -1; i++) {
        console.log("dans le for de click_fav");
          if(updatedItemList[i].id == action.value.item){
            console.log("item identique trouvé", updatedItemList[i])
            console.log(updatedItemList[i].fav);
            updatedItemList[i].fav = !updatedItemList[i].fav
            console.log('suite maj: updatedItemList:', updatedItemList)
          }
        }
        let newFavList = updatedItemList.filter(item => item.fav === true)
        console.log('suite filter nouveaux favoris :', newFavList);
        axios.post(`http://localhost:8800/api/user/favlist/${action.value.user}`, {favlist: newFavList})
        .then(res => console.log(res.body))

      return {
        ...state,
        itemsOnList: updatedItemList,
        favItems: newFavList,       
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
