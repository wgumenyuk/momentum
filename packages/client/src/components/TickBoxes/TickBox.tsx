import React from "react";

export interface TickBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const TickBox: React.FC<TickBoxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox h-4 w-4 text-blue-600 rounded-full shadow-md"
      />
      <span className="text-gray-700 text-sm font-bold">{label}</span>
    </label>
  );
};

export default TickBox;
