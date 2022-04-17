import { useReducer } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import EventContext from "./features/contexts/EventPageContext";
import OperationLogContext from "./features/contexts/OperationLogContext";
import { eventReducer } from "./features/reducers/event";
import { operationLogReducer } from "./features/reducers/operationLog";

const App = () => {
  // Pagesコンポーネント(状態を受け取る)
  const [eventState, eventDispatch] = useReducer(eventReducer, []);
  const [operationLogState, operationLogDispatch] = useReducer(
    operationLogReducer,
    []
  );
  console.log(eventState, "event");
  console.log(operationLogState, "operationLog");
  return (
    <EventContext.Provider value={{ eventState, eventDispatch }}>
      <OperationLogContext.Provider
        value={{ operationLogState, operationLogDispatch }}
      >
        <div className="container-fluid">
          <EventForm />
          <EventList />
        </div>
      </OperationLogContext.Provider>
    </EventContext.Provider>
  );
};

export default App;
