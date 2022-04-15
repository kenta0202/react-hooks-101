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
import { TEventItem, TACTION } from "../../../../interface/event";
import { initalEventState } from "../contexts/EventPageContext";

const reducer = (state = initalEventState as TEventItem[], action: TACTION) => {
  switch (action.type) {
    case "event/create":
      const event = {
        title: action.payload?.title!,
        body: action.payload?.body!,
      };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1]!.id + 1;
      return [...state, { id, uid: uid(8), ...event }];
    case "event/delete":
      return state.filter((event) => event.uid !== action.payload?.uid);
    case "event/delete_all":
      return [];
    default:
      const typecheck: never = action;
      return typecheck;
  }
};

export default reducer;
