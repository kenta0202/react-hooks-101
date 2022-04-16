import { useContext } from "react";
import { uid as UID } from "uid";
import { create, delete_all } from "../hooks/actions/eventAction";
import {
  createOperationLog,
  delete_allOperationLog,
} from "../hooks/actions/oparationLog";
import { timeCurrentIso8601 } from "../../../utils/getCurrentTime";
import EventContext from "../hooks/contexts/EventPageContext";
import OperationLogContext from "../hooks/contexts/OperationLogContext";

export const useEventForm = (
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  body: string,
  setBody: React.Dispatch<React.SetStateAction<string>>
) => {
  const { eventDispatch } = useContext(EventContext);
  const { operationLogDispatch } = useContext(OperationLogContext);

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    eventDispatch(create(title, body, UID(8)));

    operationLogDispatch(
      createOperationLog("イベントを作成しました。", timeCurrentIso8601())
    );
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = window.confirm(
      "すべてのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      eventDispatch(delete_all());
      operationLogDispatch(delete_allOperationLog());
    }
  };

  const deleteAllOperationLogs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = window.confirm(
      "全ての操作ログを本当に削除してもいいですか?"
    );
    if (result) {
      operationLogDispatch(delete_allOperationLog());
    }
  };

  return {
    addEvent,
    deleteAllEvents,
    deleteAllOperationLogs,
  };
};
