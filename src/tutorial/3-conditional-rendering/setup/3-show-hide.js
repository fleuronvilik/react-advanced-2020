import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isHide, setIsHide] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function() {
      //console.log(window.innerWidth)
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <button className="btn" onClick={() => setIsHide(!isHide)}>
        show/hide
      </button>
      {isHide ? '' : <h1>Window</h1>}
      {isHide ? '' : <h2>Width: {width}px</h2>}
    </>
  );
};

export default ShowHide;
