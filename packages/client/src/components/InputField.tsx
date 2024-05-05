import React from "react";

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string; // Changed to accept a string of Tailwind classes for overriding
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange, className }) => {
  // Default Tailwind classes for the input field
  const defaultClasses = "p-2.5 text-base rounded-lg border border-gray-300 shadow-inner w-full";
  const combinedClasses = `${defaultClasses} ${className || ""}`;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={combinedClasses}
    />
  );
};

export default InputField;
