import {
  CHANGE_TYPE_MENU_BUTTON,
  SCROLLING_SKILL_LIST_ITEMS
} from './actionTypes';

// Menu button

export function changeTypeMenuButton() {
  return {
    type: CHANGE_TYPE_MENU_BUTTON,
  }
}

// Scrolling skill list items

export function scrollingSkillListItems(direction) {
  return {
    type: SCROLLING_SKILL_LIST_ITEMS,
    payload: { direction }
  }
}