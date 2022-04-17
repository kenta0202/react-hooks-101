//   ActionCreator

import { TEventAction } from "../../../../interface/event";

export const create = (
  title: string,
  body: string,
  uid: string
): TEventAction => ({
  type: "event/create",
  payload: { title, body, uid },
});

export const delete_one = (uid: string): TEventAction => ({
  type: "event/delete",
  payload: { uid },
});

export const delete_all = (): TEventAction => ({ type: "event/delete_all" });
