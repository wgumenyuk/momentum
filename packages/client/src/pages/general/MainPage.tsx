import { BackgroundLayout } from "$components/Background";
import NavigationBar from "$components/navigation/NavigationBar";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <BackgroundLayout>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-black">Momentum</h1>
        <p className="text-lg text-black">Welcome back, <span className="font-bold">John.</span></p>
        <button 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert("Starting workout...")}
        >
          Start Workout: Push
        </button>
      </div>
      <NavigationBar />
    </BackgroundLayout>
  );
};

export default MainPage;
