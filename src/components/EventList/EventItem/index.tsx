import React from "react";
import Button from "../../util/Button";

const EventItemComponent: React.VFC<{
  title: string;
  body: string;
  id: number;
  handleOnClickDeleteButton: () => void;
}> = ({ title, body, id, handleOnClickDeleteButton }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
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

export default EventItemComponent;
