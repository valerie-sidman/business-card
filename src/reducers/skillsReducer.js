import {
  SCROLLING_SKILL_LIST_ITEMS
} from '../actions/actionTypes';
import certificates from '../data/certificates.json';

const certificatesArray = JSON.parse(certificates);
const initialState = {
  windowWeight: 0,
  skillsIdList: [],
  start: true, // находимся в начале массива с сертификатами - переделать
  end: false // находимся в конце массива с сертификатами - переделать
}

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SCROLLING_SKILL_LIST_ITEMS:
      const {direction} = action.payload;
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
      else if (direction === "back") {
        // доработать
        newSkillsIdList.pop();
        newSkillsIdList.unshift();
        return {
          ...state, skillsIdList: newSkillsIdList,
        }
      }
      break;
    default:
      return state;
  }
}