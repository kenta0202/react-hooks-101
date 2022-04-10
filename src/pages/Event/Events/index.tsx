import React, { useContext } from "react";
import EventPageContext from "../hooks/contexts/EventPageContext";
import Event from "./Event/Event";

// 局所的ドメインコンポーネント
/*
pagesに依存する
ローカルの状態を持つ
*/

const Events: React.VFC = () => {
  const { state } = useContext(EventPageContext);

  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event) => (
            <Event event={event} key={event.uid} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
