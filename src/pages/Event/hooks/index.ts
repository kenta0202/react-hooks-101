import { Dispatch, useReducer } from "react";
import { TEventAction, TEventState } from "../../../interface/event";
import { eventReducer } from "./reducers/event";

export const useEventPageContextValue = (values: TEventState) => {
  const [state, dispatch] = useReducer(eventReducer, values);

  const customDispatch = (
    action: TEventAction | ((dispatch: Dispatch<TEventAction>) => Promise<void>)
  ) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return { state, dispatch: customDispatch };
};
