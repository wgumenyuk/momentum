import React, { useState } from "react";
import CheckBox from "./CheckBox";

const TermsAndConditionsCheckbox = () => {
  const [ isChecked, setIsChecked ] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <CheckBox
      label={
        <span>
          I accept the <a href="/terms-and-conditions" onClick={handleLinkClick} className="text-blue-500 hover:text-blue-600 visited:text-purple-600 font-bold">terms and conditions</a>
        </span>
      }
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default TermsAndConditionsCheckbox;
