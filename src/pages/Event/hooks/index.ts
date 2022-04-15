import { Dispatch, useReducer } from "react";
import { TACTION, TEventState } from "../../../interface/event";
import eventReducer from "./reducers/events";

export const useEventPageContextValue = (values: TEventState) => {
  const [state, dispatch] = useReducer(eventReducer, values);

  const customDispatch = (
    action: TACTION | ((dispatch: Dispatch<TACTION>) => Promise<void>)
  ) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return { state, dispatch: customDispatch };
};
