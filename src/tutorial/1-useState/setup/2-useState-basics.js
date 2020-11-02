import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("hello world"))
  // const [value, handler] = useState(1)
  // console.log(value, handler)
  const [title, setTitle] = useState("random title");
  
  const handleClick = () => {
    if (title === "random title") setTitle("Hello World")
    else setTitle("random title")
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
