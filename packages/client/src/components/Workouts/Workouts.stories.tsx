import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import WorkoutItem from "./WorkoutItem";

export default {
  title: "Components/SplitItem",
  component: WorkoutItem
} as Meta;

const Template: StoryFn = () => (
  <div className="space-y-4">
    <WorkoutItem title="Push" muscles="Chest, Shoulders, Triceps"/>
    <WorkoutItem title="Pull" muscles="Back, Biceps"/>
    <WorkoutItem title="Legs" muscles="Quads, Hamstrings, Calves"/>
  </div>
);

export const AllSplits = Template.bind({});
