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
    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-2 w-full">
      <Mail className="text-gray-600 mr-2.5 text-xl" />
      <InputField placeholder={placeholder} value={value} onChange={onChange} className="flex-1 border-none shadow-none rounded-none" />
    </div>
  );
};

export default EmailInputField;
