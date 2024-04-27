import React from "react";

const Button: React.FC<{ onClick: () => void; text: string }> = ({
  onClick,
  text,
}) => (
  <button
    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
