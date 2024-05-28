import React, { useState } from "react";

const ExercisePage: React.FC = () => {
  const [ count, setCount ] = useState(0);
  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setCount((prevCount) => prevCount + 1);
  };

  const handleSkip = () => {
    alert("Skipped!");
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center mb-8">
        <button
          className={`w-12 h-12 rounded-full border-2 ${clicked ? "bg-gray-500" : "bg-blue-500"} text-white font-semibold`}
          onClick={handleClick}>
          Click
        </button>
        <div className="mt-4 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-black font-semibold">
          {count}
        </div>
        <div className="mt-4 w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-300 font-semibold">
          {count}
        </div>
      </div>
      <button
        className="mt-4 bg-transparent text-blue-300 underline"
        onClick={handleSkip}>
        Skip exercise
      </button>
    </div>
  );
};

export default ExercisePage;
