import React from "react";
import { Mail } from "lucide-react";
import InputField from "./InputField";

interface EmailInputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({ placeholder, value, onChange }) => (
  <div className="flex flex-col items-start rounded-lg shadow-sm p-1 w-full h-auto">
    <span className="text-xs text-gray-600 mb-1">
      E-Mail
    </span>
    <div className="flex items-center w-full bg-white rounded-lg px-4 py-2 gap-2">
      <Mail className="text-gray-900 mr-1 text-lg"/>
      <InputField 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className="w-full shadow-none rounded-none bg-transparent text-sm" 
      />
    </div>
  </div>
);

export default EmailInputField;
