import React from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { Navigation } from "$components/Navigation";

export const MainPage: React.FC = () => {
  return (
    <BackgroundLayout>
      <div className="flex flex-col items-center space-y-4 w-full">
        <h1 className="text-2xl font-bold text-black">Momentum</h1>
        <p className="text-lg text-black">Welcome back, <span className="font-bold">John.</span></p>
        <button 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert("Starting workout...")}
        >
          Start Workout: Push
        </button>
      </div>
      <Navigation/>
    </BackgroundLayout>
  );
};
