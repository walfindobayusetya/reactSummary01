import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>counter is : {count}</h1>
      <button onClick={() =>setCount (count + 1)}> change counter</button>
    </div>
  );
}
