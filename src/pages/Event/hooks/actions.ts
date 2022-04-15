//   ActionCreator

import { TACTION } from "../../../interface/event";

export const create = (title: string, body: string, uid: string): TACTION => ({
  type: "event/create",
  payload: { title, body, uid },
});

export const delete_one = (uid: string): TACTION => ({
  type: "event/delete",
  payload: { uid },
});

export const delete_all = (): TACTION => ({ type: "event/delete_all" });
