import {
  SCROLLING_SKILL_LIST_ITEMS,
  TRACKING_WINDOW_WIDTH
} from '../actions/actionTypes';
import certificates from '../data/certificates.json';

const certificatesArray = JSON.parse(JSON.stringify(certificates));
console.log(certificatesArray)
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
      if (direction === "forth" && newSkillsIdList[lastElementIndex] < certificatesArray.length) {
        newSkillsIdList.push(newSkillsIdList[lastElementIndex] + 1);
        newSkillsIdList.shift();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          start: false,
          end: false
        }
      } else if (direction === "forth" && newSkillsIdList[lastElementIndex] >= certificatesArray.length) {
        return {
          ...state,
          end: true
        }
      }
      if (direction === "back" && newSkillsIdList[lastElementIndex] > 1) {
        newSkillsIdList.unshift(newSkillsIdList[lastElementIndex] - 1);
        newSkillsIdList.pop();
        return {
          ...state, skillsIdList: newSkillsIdList,
          start: false,
          end: false
        }
      } else if (direction === "back" && newSkillsIdList[lastElementIndex] <= 1) {
        return {
          ...state,
          start: true
        }
      }
      break;
    case TRACKING_WINDOW_WIDTH:
      const { windowWidth } = action.payload;
      return {
        ...state,
        windowWidth: windowWidth
      }
      break;
    default:
      return state;
  }
}