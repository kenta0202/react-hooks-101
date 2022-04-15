export type TEventItem = {
  id: number;
  uid: string;
  title: string;
  body: string;
};

export type TEventItemState = TEventItem[];

export type TACTION =
  | { type: "event/delete"; uid: string }
  | { type: "event/delete_all" }
  | { type: "event/create"; title: string; body: string; uid: string };
