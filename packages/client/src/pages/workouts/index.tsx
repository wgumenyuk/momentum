import { useState } from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { WorkoutProvider } from "$components/WorkoutContext";
import { Workouts } from "$pages/workouts/Workouts";
import { AddWorkout } from "$pages/workouts/AddWorkout";
import { AddExercise } from "$pages/workouts/AddExercise";
import { EditExercise } from "$pages/workouts/EditExercise";
import { Filter } from "$pages/workouts/Filter";

// Types
import type { FC } from "react";

export type WorkoutStack =
  "workouts" | "add-workout" | "add-exercise" | "edit-exercise" | "filter";

export const WorkoutsPage: FC = () => {
  const [ stack, setStack ] = useState<WorkoutStack>("workouts");

  const render = () => {
    switch (stack) {
      case "workouts": return <Workouts setStack={setStack}/>;
      case "add-workout": return <AddWorkout setStack={setStack}/>;
      case "add-exercise": return <AddExercise setStack={setStack}/>;
      case "edit-exercise": return <EditExercise setStack={setStack}/>;
      case "filter": return <Filter setStack={setStack}/>;
    }
  };

  return (
    <BackgroundLayout>
      <WorkoutProvider>
        {render()}
      </WorkoutProvider>
    </BackgroundLayout>
  );
};
