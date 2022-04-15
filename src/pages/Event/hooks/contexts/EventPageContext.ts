import { createContext, Dispatch } from "react";
// import { initalState } from "../..";
import { TEventAction, TEventState } from "../../../../interface/event";

const EventPageContext = createContext<{
  state: TEventState;
  dispatch: (
    action: TEventAction | ((dispatch: Dispatch<TEventAction>) => Promise<void>)
  ) => void;
}>({
  state: [],
  dispatch: () => {},
});

export default EventPageContext;
