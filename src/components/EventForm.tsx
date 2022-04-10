import React, { useState } from "react";
import { uid as UID } from "uid";
import { TACTION, TEventItemsState } from "../interface/event";

// 局所的ドメインコンポーネント
/*
pagesに依存する
ローカルの状態を持つ
*/

const EventForm: React.VFC<{
  state: TEventItemsState;
  dispatch: React.Dispatch<TACTION>;
}> = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CREATE_EVENT", title, body, uid: UID(8) });
    // console.log({ state });
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

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle" className="">
            タイトル
          </label>
          <input
            type="text"
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody" className="">
            ボディー
          </label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={unCreatable}
          onClick={addEvent}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          すべてのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
