import React from "react";
import { MdEmail } from "react-icons/md";

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.075)",
    width: "100%"
  };

  const inputStyle = {
    flex: 1,
    padding: "10px 5px",
    border: "none",
    outline: "none",
    fontSize: "14px"
  };

  const iconStyle = {
    color: "#555",
    marginRight: "10px",
    fontSize: "24px"
  };

  return (
    <div style={containerStyle}>
      <MdEmail style={iconStyle} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

export default InputField;
