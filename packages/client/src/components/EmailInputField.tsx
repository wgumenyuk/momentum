import React from "react";
import { Mail } from "lucide-react";
import InputField from "./InputField";

interface EmailInputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-1 w-full h-10 bg-white">
      <Mail className="text-gray-900 mr-1 text-lg" />
      <InputField placeholder={placeholder} value={value} onChange={onChange} className="w-full border-none shadow-none rounded-none bg-transparent text-sm" /> 
    </div>
  );
};

export default EmailInputField;
