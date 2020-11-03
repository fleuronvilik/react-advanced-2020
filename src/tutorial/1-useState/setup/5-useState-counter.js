import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);
  return (
    <>
      <h2>regular counter</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count-1)}>
        decrease
      </button>
      <button className="btn" onClick={reset}>reset</button>
      <button className="btn" onClick={() => setCount(count+1)}>
        increase
      </button>
    </>
  );
};

export default UseStateCounter;
