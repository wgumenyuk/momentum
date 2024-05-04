import React from "react";

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  styleOverride?: React.CSSProperties;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange, styleOverride }) => {
  const defaultStyle = {
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "9px",
    border: "1px solid #ccc",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.075)",
    width: "100%"
  };

  const combinedStyle = { ...defaultStyle, ...styleOverride };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={combinedStyle}
    />
  );
};

export default InputField;
