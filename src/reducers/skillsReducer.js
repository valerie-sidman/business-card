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
      const {direction} = action.payload;
      const newSkillsIdList = state.skillsIdList;
      const lastElementIndex = newSkillsIdList.length - 1;
      // Проверка на местоположения элемента в середине массива - можем двигаться вперед
      if (direction === "forth" && newSkillsIdList[lastElementIndex] < certificates.length - 1) {
        newSkillsIdList.push(newSkillsIdList[lastElementIndex] + 1);
        newSkillsIdList.shift();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          start: false,
          end: false
        }
      // Проверка на местоположения элемента на предпоследнем месте массива - можем двигаться вперед
      } else if (direction === "forth" && newSkillsIdList[lastElementIndex] === certificates.length - 1) {
        newSkillsIdList.push(newSkillsIdList[lastElementIndex] + 1);
        newSkillsIdList.shift();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          end: true
        }
      }
      // Проверка на местоположения элемента в середине массива - можем двигаться назад
      if (direction === "back" && newSkillsIdList[0] > 2) {
        newSkillsIdList.unshift(newSkillsIdList[0] - 1);
        newSkillsIdList.pop();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          start: false,
          end: false
        }
      // Проверка на местоположения элемента на втором месте в массиве - можем двигаться назад
      } else if (direction === "back" && newSkillsIdList[0] === 2) {
        newSkillsIdList.unshift(newSkillsIdList[0] - 1);
        newSkillsIdList.pop();
        return {
          ...state,
          skillsIdList: newSkillsIdList,
          start: true,
        }
      }
      break;
    case ADD_SKILL_ITEM_ID:
      const {updatedSkillsIdList} = action.payload;
      return {
        ...state,
        skillsIdList: updatedSkillsIdList,
        start: true,
        end: false
      }
    case TRACKING_WINDOW_WIDTH:
      const {windowWidth} = action.payload;
      return {
        ...state,
        windowWidth: windowWidth
      }
    default:
      return state;
  }
}