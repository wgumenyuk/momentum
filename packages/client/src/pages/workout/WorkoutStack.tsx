import React, { useState } from "react";
import { BackgroundLayout } from "$components/Background";
import WorkoutsPage from "./WorkoutsPage";
import EditWorkoutPage from "./EditWorkoutPage";
import EditSplitPage from "./EditSplitPage";
import { StackTop } from "$components/StackTop";
import { FilterMuscleGroupsPage } from "./FilterMuscleGroups";
import ExerciseListPage from "./ExerciseList";


const WorkoutStack: React.FC = () => {
  const [ currentView, setCurrentView ] = useState("workouts");

  const handleCancel = () => {
    setCurrentView("workouts");
  };

  const handleAccept = () => {
    // Implement your accept logic here, if needed
  };

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
      case "filterMuscleGroups":
        return <FilterMuscleGroupsPage/>;
      default:
        return <WorkoutsPage navigate={setCurrentView}/>;
    }
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        {currentView !== "editSplit" && (
          <StackTop onCancel={handleCancel} onAccept={handleAccept}/>
        )}
        {renderView()}
      </div>
    </BackgroundLayout>
  );
};

export default WorkoutStack;
