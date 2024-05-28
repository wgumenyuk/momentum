import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Workout from "./Workout";

export default {
  title: "Components/Workout",
  component: Workout
} as Meta;

const Template: StoryFn = () => (
  <div className="space-y-4">
    <Workout title="Push" muscles="Chest, Shoulders, Triceps"/>
    <Workout title="Pull" muscles="Back, Biceps"/>
    <Workout title="Legs" muscles="Quads, Hamstrings, Calves"/>
  </div>
);

export const AllWorkouts = Template.bind({});
