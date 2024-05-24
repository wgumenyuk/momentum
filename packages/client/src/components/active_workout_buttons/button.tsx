import React, { useState } from "react";

const RoundButton: React.FC = () => {
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

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        Sets
      </button>
      <div style={counterContainerStyle}>
        <div style={counterStyle}>{count}</div>
      </div>
    </div>
  );
};

export default RoundButton;
