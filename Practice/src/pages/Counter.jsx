import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count</p>
      <p>{count}</p>
      <div style={{ display: "flex" }}>
        <button style={{ margin: "8px" }} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button style={{ margin: "8px" }} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
