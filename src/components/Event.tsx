import React, { useContext } from "react";
import { TEventItem } from "../interface/event";
import EventPageContext from "../pages/Event/hooks/contexts/EventPageContext";

// 局所的ドメインコンポーネント
/*
pagesに依存する
ローカルの状態を持つ
*/

const Event: React.VFC<{
  event: TEventItem;
}> = ({ event }) => {
  const id = event.id;
  const { dispatch } = useContext(EventPageContext);
  const handleOnClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(ID=${id})を本当に削除しても良いですか？`
    );
    result && dispatch({ type: "DELETE_EVENT", uid: event.uid });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleOnClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
