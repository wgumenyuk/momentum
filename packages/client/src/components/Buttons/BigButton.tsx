import React from "react";

interface BigButtonProps {
  text: string;
  onClick: () => void;
  variant: "blue" | "red";
}

const BigButton: React.FC<BigButtonProps> = ({ text, onClick, variant }) => {
  const baseStyles =
    "text-white py-2 px-4 sm:px-6 md:px-10 lg:px-20 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out text-lg";
  const variantStyles =
    variant === "blue"
      ? "bg-gradient-btn hover:bg-gradient-btn focus:ring-blue-200"
      : "bg-red-400 hover:bg-red-300 focus:ring-red-300";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {text}
    </button>
  );
};

export default BigButton;
