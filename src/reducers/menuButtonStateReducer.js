import {
  CHANGE_TYPE_MENU_BUTTON
} from '../actions/actionTypes';

import dotsMenuIcon from '../images/icon_dots_8x30.png';
import crossMenuIcon from '../images/icon_close_30x30.png';

const initialState = {
  name: 'menu-button__icon--dots',
  src: dotsMenuIcon,
  alt: "Menu icon dots",
  type: 'dots'
}

export default function menuButtonStateReducer(state = initialState, action) {
  console.log('reducer');
  switch (action.type) {
    case CHANGE_TYPE_MENU_BUTTON:
      if (state.type === 'dots') {
        return {
          ...state,
          name: 'menu-button__icon--cross',
          src: crossMenuIcon,
          alt: "Menu icon cross",
          type: 'cross'
        }
      } else {
        return initialState;
      }

    default:
      return state;
  }
}