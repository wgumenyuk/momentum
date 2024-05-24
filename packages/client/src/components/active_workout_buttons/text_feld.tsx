import React, { useState } from "react";

const RoundButtonWithCounter: React.FC = () => {
  const [ count, setCount ] = useState(0);
  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setCount((prevCount) => prevCount + 1);
  };

  const buttonStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "2px solid black",
    backgroundColor: clicked ? "gray" : "white",
    cursor: "pointer",
    fontSize: "16px"
  };

  const counterContainerStyle: React.CSSProperties = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const counterStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px"
  };

  const textFieldStyle: React.CSSProperties = {
    marginTop: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    textAlign: "center"
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        Click
      </button>
      <div style={counterContainerStyle}>
        <div style={counterStyle}>{count}</div>
      </div>
      <div style={textFieldStyle}>{count}</div>
    </div>
  );
};

export default RoundButtonWithCounter;
