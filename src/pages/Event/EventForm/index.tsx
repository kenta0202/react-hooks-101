import { useContext, useState } from "react";
import EventFormComponent from "../../../components/EventForm";
import EventContext from "../features/contexts/EventPageContext";
import OperationLogContext from "../features/contexts/OperationLogContext";

import { useEventForm } from "./hooks";

// Containerコンポーネント

const EventForm: React.VFC = () => {
  const { eventState } = useContext(EventContext);
  const { operationLogState } = useContext(OperationLogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const unCreatable = title === "" || body === "";

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  // Q: 全部ぶっこんでいて... でもuseStateを切り出すとカスタムフックの引数にstate変数とstate関数が入るのも変
  const { deleteAllEvents, addEvent, deleteAllOperationLogs } = useEventForm(
    title,
    setTitle,
    body,
    setBody
  );
  return (
    <>
      {/* Q: 見た目のコンポ―ネントとして切り出した方がいいのか */}
      <EventFormComponent
        unCreatable={unCreatable}
        deleteAllEvents={deleteAllEvents}
        addEvent={addEvent}
        deleteAllOperationLogs={deleteAllOperationLogs}
        title={title}
        body={body}
        handleOnChangeTitle={handleOnChangeTitle}
        handleOnChangeBody={handleOnChangeBody}
        eventStateLength={eventState.length}
        operationLogStateLength={operationLogState.length}
      />
    </>
  );
};

export default EventForm;
