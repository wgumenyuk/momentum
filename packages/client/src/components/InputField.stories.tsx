import React, { useState } from "react";
import InputField from "./InputField";
import EmailInputField from "./EmailInputField";

export default {
  title: "Components/InputField",
  component: { InputField, EmailInputField }
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