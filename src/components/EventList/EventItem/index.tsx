import React from "react";
import Button from "../../common/Button";

const EventItemComponent: React.VFC<{
  title: string;
  body: string;
  id: number;
  uid: string;
  handleOnClickDeleteButton: () => void;
}> = ({ title, body, id, uid, handleOnClickDeleteButton }) => {
  return (
    // Q:
    // react_devtools_backend.js:3973 Warning: Each child in a list should have a unique "key" prop.

    <tr key={uid}>
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
