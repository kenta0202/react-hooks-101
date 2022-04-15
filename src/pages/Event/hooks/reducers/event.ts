/*
action ={
  type:"event/create",
  title:"2020東京オリンピックのお知らせ"
  body:"2020東京でオリンピックを開催します。つきましては、、"
}

#before
state =[]
#after
state=[{
  id:1
  title:"2020東京オリンピックのお知らせ"
  body:"2020東京でオリンピックを開催します。つきましては、、"
}]

#before
state = [
{id:1,title:"タイトル1",body:"ボディ１"}
{id:2,title:"タイトル2",body:"ボディ2"}
{id:3,title:"タイトル3",body:"ボディ3"}
]
#after
state=[
{id:1,title:"タイトル1",body:"ボディ１"}
{id:2,title:"タイトル2",body:"ボディ2"}
{id:3,title:"タイトル3",body:"ボディ3"}
{id:4
title:"2020東京オリンピックのお知らせ"
body:"2020東京でオリンピックを開催します。つきましては、、"
}]

*/
import { uid } from "uid";
import { initalState } from "../..";
import {
  TEventAction,
  EventCategory,
  TEventState,
} from "../../../../interface/event";

export const eventReducer = (
  state = [] as TEventState,
  action: TEventAction
) => {
  switch (action.type) {
    case EventCategory.create:
      const event = {
        title: action.payload?.title!,
        body: action.payload?.body!,
      };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1]!.id + 1;
      return [...state, { id, uid: uid(8), ...event }];
    case EventCategory.delete:
      return state.filter((event) => event.uid !== action.payload?.uid);
    case EventCategory.deleteAll:
      return [];
    default:
      const typecheck: never = action;
      return typecheck;
  }
};
