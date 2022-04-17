import { useContext } from "react";
import { TEventItem } from "../features/interface/event";
import { delete_one } from "../features/actions/eventAction";
import EventPageContext from "../features/contexts/EventPageContext";

export const useEvent = (id: TEventItem["id"], uid: TEventItem["uid"]) => {
  const { eventDispatch } = useContext(EventPageContext);
  const handleOnClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(ID=${id})を本当に削除しても良いですか？`
    );
    result && eventDispatch(delete_one(uid));
  };

  return { handleOnClickDeleteButton };
};
