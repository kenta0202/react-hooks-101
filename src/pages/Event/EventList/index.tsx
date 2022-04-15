import React, { useContext } from "react";
import EventPageContext from "../hooks/context/EventPageContext";
import EventListComponent from "../../../components/EventList";

// Containerコンポーネント

const EventList: React.VFC = () => {
  const { state } = useContext(EventPageContext);
  return <EventListComponent state={state} />;
};

export default EventList;
