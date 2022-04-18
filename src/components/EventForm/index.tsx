import React from "react";
import Button from "../common/Button";
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
  deleteAllOperationLogs,
  eventStateLength,
  operationLogStateLength,
}) => {
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle" className="">
            タイトル
          </label>
          <Input {...{ title, handleOnChangeTitle }} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody" className="">
            ボディー
          </label>
          <TextArea {...{ body, handleOnChangeBody }} />
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
          disabled={eventStateLength === 0}
        />
        <Button
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          children="すべての操作ログを削除する"
          disabled={operationLogStateLength === 0}
        />
      </form>
    </>
  );
};

export default EventFormComponent;
