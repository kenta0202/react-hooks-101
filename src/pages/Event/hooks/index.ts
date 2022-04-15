import { Dispatch, useReducer } from "react";
import { TACTION, TEventItemState } from "../../../interface/event";
import { initalEventState } from "./context/EventPageContext";
import reducer from "./reducer";

export const useEventPageContextValue = (
  values: TEventItemState = initalEventState
) => {
  const [state, dispatch] = useReducer(reducer, values);

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
