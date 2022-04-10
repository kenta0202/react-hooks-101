import { useContext, useState } from "react";
import EventPageContext from "../hooks/contexts/EventPageContext";
import { uid as UID } from "uid";

export const useEventForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { dispatch, state } = useContext(EventPageContext);

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CREATE_EVENT", title, body, uid: UID(8) });
    console.log({ state });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = window.confirm(
      "すべてのイベントを本当に削除しても良いですか？"
    );
    result && dispatch({ type: "DELETE_ALL_EVENTS" });
  };

  const unCreatable = title === "" || body === "";

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return {
    addEvent,
    deleteAllEvents,
    unCreatable,
    title,
    body,
    state,
    handleOnChangeTitle,
    handleOnChangeBody,
  };
};
