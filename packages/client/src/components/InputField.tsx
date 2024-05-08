import React from "react";

interface InputFieldProps {
  title?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password";
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ title, placeholder, value, onChange, type = "text", className }) => {
  return (
    <div className="flex items-center rounded-lg shadow-sm p-1 w-full h-10 bg-white relative">
      {title && <span className="absolute left-2 top-1 text-xs text-gray-600">{title}</span>}
      {type === "password" ? (
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`flex-1 border-none shadow-none bg-transparent outline-none text-sm ${className}`}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`flex-1 border-none shadow-none bg-transparent outline-none text-sm ${className}`}
        />
      )}
    </div>
  );
};

export default InputField;
