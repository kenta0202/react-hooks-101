import { createContext, Dispatch } from "react";
import { TACTION, TEventItemState } from "../../../../interface/event";

export const initalEventState: TEventItemState = [];

const EventPageContext = createContext<{
  state: TEventItemState;
  dispatch: (
    action: TACTION | ((dispatch: Dispatch<TACTION>) => Promise<void>)
  ) => void;
}>({
  state: initalEventState,
  dispatch: () => {},
});

export default EventPageContext;
