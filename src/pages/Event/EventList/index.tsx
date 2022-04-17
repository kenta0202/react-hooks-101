import React, { useContext } from "react";
import EventPageContext from "../features/contexts/EventPageContext";
import EventListComponent from "../../../components/EventList";

// Containerコンポーネント

const EventList: React.VFC = () => {
  const { eventState } = useContext(EventPageContext);
  return <EventListComponent state={eventState} />;
};

export default EventList;
