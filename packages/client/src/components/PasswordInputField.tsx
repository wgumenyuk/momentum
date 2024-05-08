import React from "react";
import { LockIcon } from "lucide-react";
import InputField from "./InputField";

interface PasswordInputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ placeholder, value, onChange }) => (
  <div className="flex flex-col items-start rounded-lg shadow-sm p-1 w-full h-auto bg-white">
    <span className="text-xs text-gray-600 mb-1 bg-transparent" style={{ backgroundColor: "transparent", padding: 0, margin: 0, border: "none" }}>
      Password
    </span>
    <div className="flex items-center w-full">
      <LockIcon className="text-gray-900 mr-1 text-lg" />
      <InputField 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        type="password" 
        className="w-full shadow-none rounded-none bg-transparent text-sm" 
      />
    </div>
  </div>
);

export default PasswordInputField;