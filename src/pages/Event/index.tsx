import { useEffect, useReducer } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import EventContext from "./features/contexts/EventPageContext";
import OperationLogContext from "./features/contexts/OperationLogContext";
import { TEventState } from "./features/interface/event";
import { TOperationLogState } from "./features/interface/operationLog";
import { eventReducer } from "./features/reducers/event";
import { operationLogReducer } from "./features/reducers/operationLog";
import OperationLogs from "./OperationLogs";

const App = () => {
  // const appState = localStorage.getItem("appWithRedux");

  const initialEventState: TEventState =
    /* appState?JSON.parse(appState): */ [];
  const initalOperationLogState: TOperationLogState = [];

  // Pagesコンポーネント(状態を受け取る)
  const [eventState, eventDispatch] = useReducer(
    eventReducer,
    initialEventState
  );
  const [operationLogState, operationLogDispatch] = useReducer(
    operationLogReducer,
    initalOperationLogState
  );
  console.log(eventState, "event");
  console.log(operationLogState, "operationLog");

  // useEffect(() => {
  //   localStorage.setItem("appWithRedux", JSON.stringify(eventState));
  // }, [eventState]);

  return (
    <EventContext.Provider value={{ eventState, eventDispatch }}>
      <OperationLogContext.Provider
        value={{ operationLogState, operationLogDispatch }}
      >
        <div className="container-fluid">
          <EventForm />
          <EventList />
          <OperationLogs />
        </div>
      </OperationLogContext.Provider>
    </EventContext.Provider>
  );
};

export default App;
