import userReducer from "../reducer/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  cart: userReducer,
});
export default rootReducer;
