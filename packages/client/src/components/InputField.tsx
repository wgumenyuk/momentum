import React from "react";

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-2.5 text-sm border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  );
};

export default InputField;
