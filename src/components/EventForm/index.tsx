import React from "react";
import Button from "../util/Button";
import Input from "./Input";
import TextArea from "./TextArea";

const EventFormComponent: React.VFC<any> = ({
  unCreatable,
  deleteAllEvents,
  addEvent,
  title,
  body,
  handleOnChangeTitle,
  handleOnChangeBody,
  stateLength,
}) => {
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
          disabled={stateLength === 0}
        />
      </form>
    </>
  );
};

export default EventFormComponent;
