export type eventType = {
  id: number;
  uid: string;
  title: string;
  body: string;
};

export type ACTIONTYPE = {
  type: "CREATE_EVENT" | "DELETE_EVENT" | "DELETE_ALL_EVENTS";
  title?: string;
  body?: string;
  uid?: string;
};

// export type ACTION_TYPE<T> = T extends "CREATE_EVENT" ? {
//   type: "CREATE_EVENT" ;
//   title: string;
//   body: string;
// }:{
//   type: "DELETE_EVENT" | "DELETE_ALL_EVENTS";
//   id?: number;
// };

// export type ACTION_TYPE_CREATE = ACTION_TYPE<"CREATE_EVENT">
// export type ACTION_TYPE_DELETE = ACTION_TYPE<"DELETE_ALL_EVENTS">
