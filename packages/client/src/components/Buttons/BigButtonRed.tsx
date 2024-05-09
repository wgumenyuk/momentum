import React from "react";

interface BigButtonRedProps {
  text: string;
  onClick: () => void;
}

const BigButtonRed: React.FC<BigButtonRedProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-200 text-white py-2 px-20 rounded-lg shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-150 ease-in-out text-lg"
    >
      {text}
    </button>
  );
};

export default BigButtonRed;
