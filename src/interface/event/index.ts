export type eventType = {
  id: number;
  title: string;
  body: string;
};

export type ACTIONTYPE = {
  type: "CREATE_EVENT" | "DELETE_EVENT" | "CREATE_ALL_EVENTS";
  title: string;
  body: string;
};
