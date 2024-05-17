import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import WorkoutPage from "./WorkoutPage";
import ModifyWorkout from "./ModifyWorkout";

export default {
  title: "Pages/Workout",
  component: WorkoutPage
} as Meta;

// Story for WorkoutPage
export const Workout: StoryFn = () => <WorkoutPage/>;
Workout.storyName = "Workout Page";

// Story for ModifyWorkout
export const Modify: StoryFn = () => <ModifyWorkout/>;
Modify.storyName = "Modify Workout Page";
