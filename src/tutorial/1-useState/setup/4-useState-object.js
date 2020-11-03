import React, { useState } from 'react';

const UseStateObject = () => {
  const [stranger, setStranger] = useState({
    name: "John Doe",
    age: 3000,
    message: "Lorem Ipsum"
  });

  const changeMessage = () => {
    setStranger({...stranger, message: "Hello World"})
  };

  return (
    <>
      <h1>useState object example</h1>
      <h3>Name: {stranger.name}</h3>
      <h3>Age: {stranger.age}</h3>
      <h3>Message: {stranger.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
