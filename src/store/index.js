import { legacy_createStore as createStore, combineReducers} from 'redux'
import menuButtonStateReducer from "../reducers/menuButtonStateReducer.js";
import skillsReducer from "../reducers/skillsReducer.js";
import menuItemStateReducer from "../reducers/menuItemStateReducer.js";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const reducer = combineReducers({
  serviceMenuButtonState: menuButtonStateReducer,
  serviceSkillsState: skillsReducer,
  serviceMenuItemState: menuItemStateReducer,
})

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
