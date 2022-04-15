import { createContext, Dispatch } from "react";
import { TACTION, TEventState } from "../../../../interface/event";

const EventPageContext = createContext<{
  state: TEventState;
  dispatch: (
    action: TACTION | ((dispatch: Dispatch<TACTION>) => Promise<void>)
  ) => void;
}>({
  state: [],
  dispatch: () => {},
});

export default EventPageContext;
