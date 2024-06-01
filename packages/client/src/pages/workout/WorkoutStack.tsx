import React, { useState } from "react";
import { BackgroundLayout } from "$components/Background";
import WorkoutsPage from "./WorkoutsPage";
import EditWorkoutPage from "./EditWorkoutPage";
import EditSplitPage from "./EditSplitPage";
import SplitsOverviewPage from "./SplitsOverviewPage"; // Import the new component
import { StackTop } from "$components/StackTop";
import { FilterMuscleGroupsPage } from "./FilterMuscleGroups";
import ExerciseListPage from "./ExerciseList";

const WorkoutStack: React.FC = () => {
  const [ navigationStack, setNavigationStack ] = useState([ "splitsOverview" ]); // Set initial view to splitsOverview

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
      case "splitsOverview":
        return <SplitsOverviewPage navigate={handleNavigate}/>;
      case "workouts":
        return <WorkoutsPage navigate={handleNavigate}/>;
      case "editSplit":
        return <EditSplitPage navigate={handleNavigate}/>;
      case "editWorkout":
        return <EditWorkoutPage navigate={handleNavigate}/>;
      case "exerciseList":
        return <ExerciseListPage navigate={handleNavigate}/>;
      case "filterMuscleGroups":
        return <FilterMuscleGroupsPage/>;
      default:
        return <SplitsOverviewPage navigate={handleNavigate}/>; // Default is splitsOverview
    }
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        {currentView !== "splitsOverview" && (
          <StackTop onCancel={handleCancel} onAccept={handleAccept}/>
        )}
        {renderView()}
      </div>
    </BackgroundLayout>
  );
};

export default WorkoutStack;
