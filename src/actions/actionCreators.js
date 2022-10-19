import {
  CHANGE_TYPE_MENU_BUTTON
} from './actionTypes';

// Menu button

export function changeTypeMenuButton() {
  console.log('click')
  return {
    type: CHANGE_TYPE_MENU_BUTTON,
  }
}