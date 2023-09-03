import React, { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const initialCount = 0;

  const increment = ()=>{
    // setCount (count + 1)

    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);

    for(let i =0; i<2; i++)

    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      <button onClick={increment}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <div>
        <button onClick={() => setCount(initialCount)}>reset</button>
      </div>
    </div>
  );
}
