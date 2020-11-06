import React, { useState, useEffect } from 'react';

// cleanup function[Complete]
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  //console.log("RENDER", width)

  function updateWidth() {
    setWidth(window.innerWidth);
    //console.log("render")
  }

  useEffect(() => {
    //console.log("useEffect")
    window.addEventListener("resize", updateWidth);
    return () => {
      //console.log("cleanup")
      window.removeEventListener("resize", updateWidth);
    }
  });

  return (
    <React.Fragment>
      <h2>Width: {width}px</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
