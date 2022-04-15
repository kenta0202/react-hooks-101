import React from "react";

type TTextArea = {
  handleOnChangeBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  body: string;
};

// 要素コンポーネント

const TextArea: React.VFC<TTextArea> = ({ body, handleOnChangeBody }) => {
  return (
    <textarea
      className="form-control"
      id="formEventBody"
      value={body}
      onChange={handleOnChangeBody}
    />
  );
};

export default TextArea;
