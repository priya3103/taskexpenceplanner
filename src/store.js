import { createStore } from "redux";
import rootReducer from "./reducers/index";
import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(rootReducer, loadState(),devToolsEnhancer());
store.subscribe(() => {
  saveState(store.getState());
});
export { store };

function loadState() {
  try {
    let serializedState = localStorage.getItem("expense");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
}
function saveState(state) {
  try {
    let serializedState = JSON.stringify(state);
    localStorage.setItem("expense", serializedState);
  } catch (err) {}
}
