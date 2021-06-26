import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
//phase 2
import searchBtn from "./search";
export default combineReducers({
  auth,
  message,
  //phase 2
  searchBtn,
});
