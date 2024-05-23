import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Search } from "lucide-react";

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  variant: "text" | "email" | "password" | "search";
  title?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange, variant, title }) => {
  const [ showPassword, setShowPassword ] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderIcon = () => {
    if(variant === "email") return <Mail className="text-gray-900 mr-1 text-lg"/>;
    if(variant === "password") return <Lock className="text-gray-900 mr-1 text-lg"/>;
    if(variant === "search") return <Search className="text-gray-900 mr-1 text-lg"/>;
    return null;
  };

  return (
    <div className="flex flex-col items-start rounded-lg shadow-sm p-1 w-full h-auto">
      {title && (
        <span className="text-xs text-gray-600 mb-1">
          {title}
        </span>
      )}
      <div className="relative flex items-center w-full bg-white rounded-lg px-4 py-2 gap-2">
        {renderIcon()}
        <input
          type={variant === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full shadow-none rounded-none bg-transparent text-sm"
        />
        {variant === "password" && (
          <div
            className="absolute right-4 inset-y-0 flex items-center pr-2 cursor-pointer"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? <Eye/> : <EyeOff/>}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
