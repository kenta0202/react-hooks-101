import { useContext } from "react";
import { TEventItem } from "../../../interface/event";
import EventPageContext from "../hooks/contexts/EventPageContext";

export const useEvent = (id: TEventItem["id"], uid: TEventItem["uid"]) => {
  const { dispatch } = useContext(EventPageContext);
  const handleOnClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(ID=${id})を本当に削除しても良いですか？`
    );
    result && dispatch({ type: "event/delete", uid: uid });
  };

  return { handleOnClickDeleteButton };
};
