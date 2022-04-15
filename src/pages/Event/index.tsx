import { TRootState } from "../../interface";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { useEventPageContextValue } from "./hooks";
import EventPageContext from "./hooks/contexts/EventPageContext";

export const initalState: TRootState = {
  events: [],
  operationLogs: [],
};

const App = () => {
  // Pagesコンポーネント(状態を受け取る)
  const contextValues = useEventPageContextValue(initalState.events);
  // contextValuesはstateとdispatch
  return (
    <EventPageContext.Provider value={contextValues}>
      <div className="container-fluid">
        <EventForm />
        <EventList />
      </div>
    </EventPageContext.Provider>
  );
};

export default App;
