import React, { useState } from "react";
import { BackgroundLayout } from "$components/Background";
import EditWorkoutPage from "./EditWorkoutPage";
import WorkoutsPage from "./WorkoutPage";

const InfoPage: React.FC = () => (
  <div className="min-h-screen w-full bg-gray-900 p-6 text-white">
    <h1 className="text-2xl font-bold">Info Page</h1>
    <p>This page is not ready yet.</p>
  </div>
);

const WorkoutStack: React.FC = () => {
  const [ currentView, setCurrentView ] = useState("workouts");

  const renderView = () => {
    switch (currentView) {
      case "workouts":
        return <WorkoutsPage navigate={setCurrentView}/>;
      case "info":
        return <InfoPage/>;
      case "editWorkout":
        return <EditWorkoutPage navigate={setCurrentView}/>;
      default:
        return <WorkoutsPage navigate={setCurrentView}/>;
    }
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">{renderView()}</div>
    </BackgroundLayout>
  );
};

export default WorkoutStack;
