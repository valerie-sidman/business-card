import {
  HANDLE_MENU_ITEM_STATE,
  CHECKING_CLICK_ON_MENU
} from '../actions/actionTypes';

const initialState = {
  name: "home",
  clicked: false
}

export default function menuItemStateReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_MENU_ITEM_STATE:
      const {name} = action.payload;
      return {
        ...state,
        name: name,
      }
    case CHECKING_CLICK_ON_MENU:
      const {clicked} = action.payload;
      return {
        ...state,
        clicked: clicked
      }
    default:
      return state;
  }
}