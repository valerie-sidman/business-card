import {
  CHANGE_TYPE_MENU_BUTTON,
  SCROLLING_SKILL_LIST_ITEMS,
  ADD_SKILL_ITEM_ID,
  TRACKING_WINDOW_WIDTH
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

// Add skill item id
export function addSkillItemId(updatedSkillsIdList) {
  return {
    type: ADD_SKILL_ITEM_ID,
    payload: { updatedSkillsIdList }
  }
}

// Tracking window width
export function trackingWindowWidth(windowWidth) {
  return {
    type: TRACKING_WINDOW_WIDTH,
    payload: { windowWidth }
  }
}
