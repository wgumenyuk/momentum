import React, { useState } from "react";
import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField
};

export const Empty = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <InputField placeholder="Enter text..." value={value} onChange={setValue} />
    </div>
  );
};

export const WithText = () => {
  const [value, setValue] = useState("Hello, Storybook!");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <InputField placeholder="Enter text..." value={value} onChange={setValue} />
    </div>
  );
};
