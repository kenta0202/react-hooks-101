import { useReducer } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import EventContext from "./hooks/contexts/EventPageContext";
import OperationLogContext from "./hooks/contexts/OperationLogContext";
import { eventReducer } from "./hooks/reducers/event";
import { operationLogReducer } from "./hooks/reducers/operationLog";

const App = () => {
  // Pagesコンポーネント(状態を受け取る)
  const [eventState, eventDispatch] = useReducer(eventReducer, []);
  const [operationLogState, operationLogDispatch] = useReducer(
    operationLogReducer,
    []
  );
  console.log(eventState);
  console.log(operationLogState);
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
