import React from "react";

type TInput = {
  handleOnChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
};

const Input: React.VFC<TInput> = ({ title, handleOnChangeTitle }) => {
  return (
    <input
      type="text"
      className="form-control"
      id="formEventTitle"
      value={title}
      onChange={handleOnChangeTitle}
    />
  );
};

export default Input;
