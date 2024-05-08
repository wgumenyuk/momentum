import React, { useState } from "react";
import InputField from "./InputField";
import EmailInputField from "./EmailInputField";
import PasswordInputField from "./PasswordInputField";

export default {
  title: "Components/InputField",
  component: InputField
};

export const PlainInput = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <InputField placeholder="Enter text..." value={value} onChange={setValue} />
    </div>
  );
};

export const EmailInput = () => {
  const [email, setEmail] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <EmailInputField placeholder="Enter email..." value={email} onChange={setEmail} />
    </div>
  );
}; 

export const PasswordInput = () => {
  const [email, setEmail] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <PasswordInputField placeholder="Enter password..." value={email} onChange={setEmail} />
    </div>
  );
}; 
