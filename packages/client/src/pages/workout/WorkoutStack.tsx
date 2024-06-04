import React, { useState } from "react";
import { BackgroundLayout } from "$components/Background";
import WorkoutsOverviewPage from "./WorkoutsOverviewPage"; // Updated import
import EditWorkoutPage from "./EditWorkoutPage";
import EditSplitPage from "./EditSplitPage";
import { StackTop } from "$components/StackTop";
import { FilterMuscleGroupsPage } from "./FilterMuscleGroups";
import ExerciseListPage from "./ExerciseList";

const WorkoutStack: React.FC = () => {
  const [ navigationStack, setNavigationStack ] = useState([ "workouts" ]); // Set initial view to workouts

  const currentView = navigationStack[navigationStack.length - 1];

  const handleCancel = () => {
    setNavigationStack((prevStack) =>
      prevStack.length > 1 ? prevStack.slice(0, -1) : prevStack
    );
  };

  const handleNavigate = (view: string) => {
    setNavigationStack((prevStack) => [ ...prevStack, view ]);
  };

  const handleAccept = () => {
    // Implement your accept logic here, if needed
  };

  const renderView = () => {
    switch (currentView) {
      case "workouts":
        return <WorkoutsOverviewPage navigate={handleNavigate}/>; // Updated view
      case "editSplit":
        return <EditSplitPage navigate={handleNavigate}/>;
      case "editWorkout":
        return <EditWorkoutPage navigate={handleNavigate}/>;
      case "exerciseList":
        return <ExerciseListPage navigate={handleNavigate}/>;
      case "filterMuscleGroups":
        return <FilterMuscleGroupsPage/>;
      default:
        return <WorkoutsOverviewPage navigate={handleNavigate}/>; // Default is workoutsOverview
    }
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900">
        {currentView !== "workouts" && (
          <StackTop onCancel={handleCancel} onAccept={handleAccept}/>
        )}
        {renderView()}
      </div>
    </BackgroundLayout>
  );
};

export default WorkoutStack;
