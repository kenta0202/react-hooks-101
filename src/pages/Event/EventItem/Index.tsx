import React from "react";
import EventItemComponent from "../../../components/EventList/EventItem";
import { TEventItem } from "../../../interface/event";
import { useEvent } from "./hooks";

// Containerコンポーネント:振る舞いを定義

const EventItem: React.VFC<{
  event: TEventItem;
}> = ({ event }) => {
  const { handleOnClickDeleteButton } = useEvent(event.id, event.uid);

  return (
    <EventItemComponent
      handleOnClickDeleteButton={handleOnClickDeleteButton}
      title={event.title}
      body={event.body}
      id={event.id}
    />
  );
};

export default EventItem;
