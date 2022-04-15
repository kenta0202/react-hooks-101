import { useContext } from "react";
import EventPageContext from "../hooks/contexts/EventPageContext";
import { uid as UID } from "uid";
import { create, delete_all } from "../hooks/actions/eventAction";
import {
  createOperationLog,
  delete_allOperationLog,
} from "../hooks/actions/oparationLog";
import { timeCurrentIso8601 } from "../../../utils/getCurrentTime";

export const useEventForm = (
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  body: string,
  setBody: React.Dispatch<React.SetStateAction<string>>
) => {
  const { dispatch } = useContext(EventPageContext);

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(create(title, body, UID(8)));

    // dispatch(createOperationLog("イベントを作成しました。",timeCurrentIso8601()))
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = window.confirm(
      "すべてのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      dispatch(delete_all());
      // dispatch(createOperationLog("すべてのイベントを削除しました。",timeCurrentIso8601()))
    }
  };

  return {
    addEvent,
    deleteAllEvents,
  };
};
