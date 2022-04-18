import { useContext } from "react";
import { TEventItem } from "../features/interface/event";
import { delete_one } from "../features/actions/eventAction";
import EventPageContext from "../features/contexts/EventPageContext";
import OperationLogContext from "../features/contexts/OperationLogContext";
import { createOperationLog } from "../features/actions/oparationLog";
import { timeCurrentIso8601 } from "../../../utils/getCurrentTime";

export const useEvent = (id: TEventItem["id"], uid: TEventItem["uid"]) => {
  const { eventDispatch } = useContext(EventPageContext);
  const { operationLogDispatch } = useContext(OperationLogContext);
  const handleOnClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(ID=${id})を本当に削除しても良いですか？`
    );
    if (result) {
      eventDispatch(delete_one(uid));
      operationLogDispatch(
        createOperationLog(
          `イベント(ID=${id})を削除しました。`,
          timeCurrentIso8601()
        )
      );
    }
  };

  return { handleOnClickDeleteButton };
};
