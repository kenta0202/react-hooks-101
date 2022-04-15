import { combineReducers } from "redux";
import { eventReducer } from "./event";
import { operationLogReducer } from "./operationLog";

export default combineReducers({ eventReducer });
