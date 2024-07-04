import { useState } from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { WorkoutProvider } from "$components/WorkoutContext";
import { Workouts } from "$pages/workout/Workouts";
import { AddWorkout } from "$pages/workout/AddWorkout";
import { AddExercise } from "$pages/workout/AddExercise";
import { Filter } from "$pages/workout/Filter";

// Types
import type { FC } from "react";

export type WorkoutStack =
  "workouts" | "add-workout" | "add-exercise" | "edit-exercise" | "filter";

export const WorkoutPage: FC = () => {
  const [ stack, setStack ] = useState<WorkoutStack>("workouts");

  const render = () => {
    switch (stack) {
      case "workouts": return <Workouts setStack={setStack}/>;
      case "add-workout": return <AddWorkout setStack={setStack}/>;
      case "add-exercise": return <AddExercise setStack={setStack}/>;
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
