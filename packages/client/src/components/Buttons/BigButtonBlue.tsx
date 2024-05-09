import React from "react";

interface BigButtonProps {
  text: string;
  onClick: () => void;
}

const BigButtonBlue: React.FC<BigButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-btn text-white py-2 px-20 rounded-lg shadow-md hover:bg-gradient-btn focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out text-lg"
    >
      {text}
    </button>
  );
};

export default BigButtonBlue;
