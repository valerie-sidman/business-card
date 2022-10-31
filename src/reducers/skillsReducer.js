import {
  SCROLLING_SKILL_LIST_ITEMS,
  ADD_SKILL_ITEM_ID,
  TRACKING_WINDOW_WIDTH
} from '../actions/actionTypes';
import certificates from '../data/certificates.json';

const initialState = {
  windowWidth: 0,
  skillsIdList: [],
  start: true,
  end: false
}

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SCROLLING_SKILL_LIST_ITEMS:
      const { direction } = action.payload;
      const newSkillsIdList = state.skillsIdList;
      const lastElementIndex = newSkillsIdList.length - 1;
      if (direction === "forth" && newSkillsIdList[lastElementIndex] < certificates.length) {
        newSkillsIdList.push(newSkillsIdList[lastElementIndex] + 1);
        newSkillsIdList.shift();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          start: false,
          end: false
        }
      } else if (direction === "forth" && newSkillsIdList[lastElementIndex] >= certificates.length) {
        return {
          ...state,
          end: true
        }
      }
      if (direction === "back" && newSkillsIdList[0] > 1) {
        newSkillsIdList.unshift(newSkillsIdList[0] - 1);
        newSkillsIdList.pop();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          start: false,
          end: false
        }
      } else if (direction === "back" && newSkillsIdList[0] <= 1) {
        return {
          ...state,
          start: true
        }
      }
      break;
    case ADD_SKILL_ITEM_ID:
      const { updatedSkillsIdList } = action.payload;
      return {
        ...state,
        skillsIdList: updatedSkillsIdList
      }
    case TRACKING_WINDOW_WIDTH:
      const { windowWidth } = action.payload;
      console.log('in reducer', windowWidth)

      return {
        ...state,
        windowWidth: windowWidth
      }
    default:
      return state;
  }
}