import { BackgroundLayout } from "$components/Background";
import NavigationBar from "$components/navigation/NavigationBar";
import React from "react";

const WorkoutPage: React.FC = () => {
  return (
    <>
      <BackgroundLayout>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold text-black">Workouts</h1>
          <p className="text-lg text-black">Manage your workouts and splits.</p>
          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center"
            onClick={() => alert("Navigate to Modify Workout Page")}
          >
            Modify Workout
          </button>
        </div>
      </BackgroundLayout>
      <NavigationBar />
    </>
  );
};

export default WorkoutPage;
