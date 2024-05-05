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
    <div className="flex items-center border rounded-lg border-gray-300 shadow-inner p-1.5 w-full">
      <Mail className="text-gray-700 mr-2.5 text-3xl" />
      <InputField 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className="border-none shadow-none rounded-none"
        ></InputField>
    </div>
  );
};

export default EmailInputField;
