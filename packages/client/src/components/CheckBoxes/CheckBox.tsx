import React from "react";
import { Link } from "react-router-dom";

export interface CheckBoxProps {
  variant: "rememberMe" | "subscribe" | "terms";
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ variant, checked, onChange }) => {
  const getLabel = () => {
    switch (variant) {
      case "rememberMe":
        return "Remember Me";
      case "subscribe":
        return "I want to subscribe to the newsletter";
      case "terms":
        return (
          <span>
            I accept the{" "}
            <Link
              to="/terms-and-conditions"
              onClick={(e) => e.stopPropagation()}
              className="text-blue-500 hover:text-blue-600 visited:text-purple-600 font-bold"
            >
              terms and conditions
            </Link>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox h-4 w-4 text-blue-600 rounded-full shadow-md"
      />
      <span className="text-gray-700 text-sm">{getLabel()}</span>
    </label>
  );
};

export default CheckBox;
