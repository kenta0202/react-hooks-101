import { createContext } from "react";
// import { initalState } from "../..";
import { TEventAction, TEventState } from "../interface/event";

const EventContext = createContext<{
  eventState: TEventState;
  eventDispatch: (action: TEventAction) => void;
}>({
  eventState: [],
  eventDispatch: () => {},
});

export default EventContext;
