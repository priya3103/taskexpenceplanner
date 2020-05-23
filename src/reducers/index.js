import { combineReducers } from "redux";
import listReducer from "./listReducer";
import { reducer as reduxFormReducer } from "redux-form";
const rootReducer = combineReducers({
  expense: listReducer,
  form: reduxFormReducer
});
export default rootReducer;
