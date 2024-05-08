import React, { useState } from "react";
import CheckBox from "./CheckBox";

const SubscribeToNewsletterCheckbox = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleCheckboxChange = (subscribed: boolean) => {
    setIsSubscribed(subscribed);
  };

  return (
    <CheckBox 
      label="I want to subscribe to the newsletter" 
      checked={isSubscribed} 
      onChange={handleCheckboxChange}
    />
  );
};

export default SubscribeToNewsletterCheckbox;
