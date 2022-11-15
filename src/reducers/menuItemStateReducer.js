import {
  HANDLE_MENU_ITEM_STATE
} from '../actions/actionTypes';

const initialState = {
  name: "Home",
}

export default function menuItemStateReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_MENU_ITEM_STATE:
      const {name} = action.payload;
      return {
        ...state,
        name: name
      }
    default:
      return state;
  }
}