export const EventCategory = {
  delete: "event/delete",
  deleteAll: "event/delete_all",
  create: "event/create",
} as const;

export type TEventItem = {
  id: number;
  uid: string;
  title: string;
  body: string;
};

export type TEventState = TEventItem[];

export type TEventAction =
  | { type: typeof EventCategory.delete; payload: { uid: string } }
  | { type: typeof EventCategory.deleteAll }
  | {
      type: typeof EventCategory.create;
      payload: { title: string; body: string; uid: string };
    };
