import { useState } from "react";

// Intern
import { InputField } from "$components/InputField";

export default {
  title: "Components/InputField",
  component: InputField
};

export const PlainInput = () => {
  const [ value, setValue ] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <InputField 
        placeholder="Enter text..." 
        value={value} 
        onChange={setValue} 
        variant="text" 
      />
    </div>
  );
};

export const EmailInput = () => {
  const [ email, setEmail ] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <InputField 
        placeholder="Enter email..." 
        value={email} 
        onChange={setEmail} 
        variant="email" 
        title="E-Mail" 
      />
    </div>
  );
};

export const PasswordInput = () => {
  const [ password, setPassword ] = useState("");
  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <InputField 
        placeholder="Enter password..." 
        value={password} 
        onChange={setPassword} 
        variant="password" 
        title="Password" 
      />
    </div>
  );
};
