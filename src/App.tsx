import React, { useState } from "react";

type defaultPropsType = {
  name: string;
  price: number;
};

const App: React.VFC<defaultPropsType> = ({ name, price }) => {
  const [_name, setName] = useState(name);
  const [_price, setPrice] = useState(price);
  const reset = () => {
    setPrice(price);
    setName(name);
  };
  return (
    <>
      <p>
        現在の{_name}は、{_price}です
      </p>
      <button onClick={() => setPrice(_price + 1)}>+1</button>
      <button onClick={() => setPrice(_price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input
        type="text"
        value={_name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default App;
