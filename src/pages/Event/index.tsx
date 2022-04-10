import { useEffect, useReducer } from "react";
import EventForm from "../../components/EventForm";
import Events from "../../components/Events";
import reducer from "../../reducers";

const App = () => {
  // Pagesコンポーネント(状態を受け取る)
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
