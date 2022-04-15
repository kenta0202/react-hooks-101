import { useContext } from "react";
import EventPageContext from "../hooks/contexts/EventPageContext";
import { uid as UID } from "uid";

export const useEventForm = (
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  body: string,
  setBody: React.Dispatch<React.SetStateAction<string>>
) => {
  const { dispatch } = useContext(EventPageContext);

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "event/create", title, body, uid: UID(8) });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = window.confirm(
      "すべてのイベントを本当に削除しても良いですか？"
    );
    result && dispatch({ type: "event/delete_all" });
  };

  return {
    addEvent,
    deleteAllEvents,
  };
};
