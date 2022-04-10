import React from "react";
import { TACTION, TEventItemsState } from "../interface/event";
import Event from "./Event";

// 局所的ドメインコンポーネント
/*
pagesに依存する
ローカルの状態を持つ
*/

const Events: React.VFC<{
  state: TEventItemsState;
  dispatch: React.Dispatch<TACTION>;
}> = ({ state, dispatch }) => {
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
            <Event event={event} dispatch={dispatch} key={event.uid} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
