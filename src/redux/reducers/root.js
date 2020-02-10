import { combineReducers } from "redux";
import chatReducer from "./entities/chatReducer";

export default combineReducers({
  chat: chatReducer
});