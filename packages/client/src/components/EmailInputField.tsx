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
    <div className="flex flex-col items-start rounded-lg shadow-sm p-1 w-full h-auto bg-white">
      <span className="text-xs text-gray-600 mb-1 bg-transparent" style={{ backgroundColor: "transparent", padding: 0, margin: 0, border: "none" }}>E-Mail</span>
      <div className="flex items-center w-full">
        <Mail className="text-gray-900 mr-1 text-lg" />
        <InputField placeholder={placeholder} value={value} onChange={onChange} className="w-full shadow-none rounded-none bg-transparent text-sm" /> 
      </div>
    </div>
  );
};

export default EmailInputField;
