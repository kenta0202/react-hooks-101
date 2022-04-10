import EventForm from "../../components/EventForm";
import Events from "../../components/Events";
import { useEventPageContextValue } from "./hooks";
import EventPageContext from "./hooks/contexts/EventPageContext";

const App = () => {
  // Pagesコンポーネント(状態を受け取る)
  const contextValues = useEventPageContextValue();

  return (
    <EventPageContext.Provider value={contextValues}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </EventPageContext.Provider>
  );
};

export default App;
