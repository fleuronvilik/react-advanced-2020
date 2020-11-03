import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // console.log(count)
      // setCount(count+1)
      setCount(prevCount => prevCount + 1)
    }, 2000);
  }
  
  return (
    <React.Fragment>
      <section>
        <h2>regular counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={() => setCount(count-1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>reset</button>
        <button className="btn" onClick={() => setCount(count+1)}>
          increase
        </button>
      </section>
      <section style={{margin: "4rem 0"}}>
        <h2>complex counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
