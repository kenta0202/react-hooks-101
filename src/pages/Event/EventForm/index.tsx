import { useContext } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/EventForm/Input";
import TextArea from "../../../components/EventForm/TextArea";
import EventPageContext from "../hooks/contexts/EventPageContext";

import { useEventForm } from "./hooks";

// 局所的ドメインコンポーネント
/*
pagesに依存する
ローカルの状態を持つ
*/

const EventForm: React.VFC = () => {
  const { state } = useContext(EventPageContext);

  const {
    unCreatable,
    deleteAllEvents,
    addEvent,
    title,
    body,
    handleOnChangeTitle,
    handleOnChangeBody,
  } = useEventForm();
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle" className="">
            タイトル
          </label>
          <Input title={title} handleOnChangeTitle={handleOnChangeTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody" className="">
            ボディー
          </label>
          <TextArea body={body} handleOnChangeBody={handleOnChangeBody} />
        </div>
        <Button
          className="btn btn-primary"
          onClick={addEvent}
          children="イベントを作成する"
          disabled={unCreatable}
        />
        <Button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          children="すべてのイベントを削除する"
          disabled={state.length === 0}
        />
      </form>
    </>
  );
};

export default EventForm;
