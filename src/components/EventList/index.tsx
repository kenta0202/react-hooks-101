import React from "react";
import { TEventState } from "../../pages/Event/features/interface/event";
import EventItem from "../../pages/Event/EventItem/Index";
const EventListComponent: React.VFC<{ state: TEventState }> = ({ state }) => {
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
            <EventItem event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EventListComponent;
