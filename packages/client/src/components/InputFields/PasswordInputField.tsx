import React, { useState } from "react";
import { LockIcon, Eye, EyeOff } from "lucide-react";
import InputField from "./InputField";

interface PasswordInputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ placeholder, value, onChange }) => {
  // State to toggle password visibility
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <div className="flex flex-col items-start rounded-lg shadow-sm p-1 w-full h-auto">
      <span className="text-xs text-gray-600 mb-1 bg-transparent">
        Password
      </span>
      <div className="relative flex items-center w-full bg-white rounded-lg px-4 py-2 gap-2">
        <LockIcon className="text-gray-900 mr-1 text-lg"/>
        <InputField 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange} 
          type={showPassword ? "text" : "password"} 
          className="w-full shadow-none rounded-none bg-transparent text-sm"
        />
        <div
          className="absolute right-4 inset-y-0 flex items-center pr-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye/> : <EyeOff/>}
        </div>
      </div>
    </div>
  );
};

export default PasswordInputField;
