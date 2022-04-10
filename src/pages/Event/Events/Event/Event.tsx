import React from "react";
import Button from "../../../../components/Button";
import { TEventItem } from "../../../../interface/event";
import { useEvent } from "./hooks";

// 局所的ドメインコンポーネント
/*
pagesに依存する
ローカルの状態を持つ
*/

const Event: React.VFC<{
  event: TEventItem;
}> = ({ event }) => {
  const id = event.id;
  const { handleOnClickDeleteButton } = useEvent(event.id, event.uid);

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <Button
          className="btn btn-danger"
          onClick={handleOnClickDeleteButton}
          children="削除"
        />
      </td>
    </tr>
  );
};

export default Event;
