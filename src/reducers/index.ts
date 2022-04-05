/*
action ={
  type:"CREATE_EVENT",
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
type eventType = {
  id: number;
  title: string;
  body: string;
};

type ACTIONTYPE = {
  type: "CREATE_EVENT" | "DELETE_EVENT" | "CREATE_ALL_EVENTS";
  title: string;
  body: string;
};

const events = (state: Partial<eventType[]> = [], action: ACTIONTYPE) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1]!.id + 1;
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
      return;
    case "CREATE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
