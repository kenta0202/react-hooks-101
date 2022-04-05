import React, { useState, useEffect } from "react";

type defaultPropsType = {
  name: string;
  price: number;
};

const App: React.VFC<defaultPropsType> = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;
  useEffect(() => {
    console.log("This is like componentDidUpdate or componentDidMount");
  });
  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);
  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, name: e.target.value });
        }}
      />
    </>
  );
};

export default App;
