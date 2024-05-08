import React, { useState } from "react";
import TickBox from "./CheckBox";

const RememberMeCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <TickBox 
      label="Remember Me" 
      checked={isChecked} 
      onChange={handleCheckboxChange}
    />
  );
};

export default RememberMeCheckbox;
