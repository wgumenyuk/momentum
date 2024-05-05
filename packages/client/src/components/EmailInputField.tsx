import React from "react";
import { Mail } from "lucide-react";  // Import Mail icon from lucide-react
import InputField from "./InputField";

interface EmailInputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({ placeholder, value, onChange }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    borderRadius: "9px",
    border: "1px solid #ccc",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.075)",
    padding: "5px 10px",
    width: "100%"
  };

  const iconStyle = {
    color: "#555",
    marginRight: "10px",
    fontSize: "24px"
  };

  return (
    <div style={containerStyle}>
      <Mail style={iconStyle} />
      <InputField placeholder={placeholder} value={value} onChange={onChange} styleOverride={{ border: "none", boxShadow: "none", borderRadius: "0px" }} />
    </div>
  );
};

export default EmailInputField;
