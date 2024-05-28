import React, { useState } from "react";
import { BackgroundLayout } from "$components/Background";
import WorkoutsPage from "./WorkoutsPage";
import EditWorkoutPage from "./EditWorkoutPage";
import EditSplitPage from "./EditSplitPage"; 
import ExerciseListPage from "./ExerciseList";

const WorkoutStack: React.FC = () => {
  const [ currentView, setCurrentView ] = useState("workouts");

  const renderView = () => {
    switch (currentView) {
      case "workouts":
        return <WorkoutsPage navigate={setCurrentView}/>;
      case "editSplit":
        return <EditSplitPage navigate={setCurrentView}/>;
      case "editWorkout":
        return <EditWorkoutPage navigate={setCurrentView}/>;
      case "exerciseList":
        return <ExerciseListPage navigate={setCurrentView}/>;
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
