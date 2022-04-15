import { combineReducers } from "redux";
import { eventReducer } from "./event";
import { operationLogReducer } from "./operationLog";

export const rootReducer = combineReducers({
  eventReducer,
  operationLogReducer,
});
