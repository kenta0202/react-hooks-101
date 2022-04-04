import React, { useState } from "react";

const App = () => {
  console.log("App");
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const double = () => {
    setCount((previousCount) => previousCount * 2);
  };
  const divide3 = () => {
    setCount((previousCount) =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    );
  };

  return (
    <>
      <div className="App">count:{count}</div>
      <button onClick={increment} value={count}>
        +1
      </button>
      <button onClick={decrement} value={count}>
        -1
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>x2</button>
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </>
  );
};

export default App;
