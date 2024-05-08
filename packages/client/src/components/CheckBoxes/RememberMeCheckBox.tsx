import React, { useState } from "react";
import CheckBox from "./CheckBox";

const RememberMeCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <CheckBox 
      label="Remember Me" 
      checked={isChecked} 
      onChange={handleCheckboxChange}
    />
  );
};

export default RememberMeCheckbox;
