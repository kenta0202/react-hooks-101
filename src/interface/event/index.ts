export type TEventItem = {
  id: number;
  uid: string;
  title: string;
  body: string;
};

export type TEventItemsState = TEventItem[];

export type TACTION =
  | { type: "DELETE_EVENT"; uid?: string }
  | { type: "DELETE_ALL_EVENTS" }
  | { type: "CREATE_EVENT"; title: string; body: string; uid: string };
