import React from "react";
import { ACTIONTYPE, eventType } from "../interface/event";

type EventComProps = {
  event: eventType;
  dispatch: (value: ACTIONTYPE) => void;
  key: string;
};

const Event: React.VFC<EventComProps> = ({ event, dispatch }) => {
  const id = event.id;
  const handleOnClickDeleteButton = () => {
    dispatch({ type: "DELETE_EVENT", uid: event.uid });
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
