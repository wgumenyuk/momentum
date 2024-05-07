import React from "react";
import { LockIcon } from "lucide-react";
import InputField from "./InputField";

interface PasswordInputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center rounded-lg shadow-sm p-1 w-full h-10 bg-white">
      <LockIcon className="text-gray-900 mr-1 text-lg" />
      <InputField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="password"
        className="w-full shadow-none rounded-none bg-transparent text-sm"
      /> 
    </div>
  );
};

export default PasswordInputField;
