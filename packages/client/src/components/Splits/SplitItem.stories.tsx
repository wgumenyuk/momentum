// src/components/SplitItem.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SplitItem from "./SplitItem";

export default {
  title: "Components/SplitItem",
  component: SplitItem
} as Meta;

const Template: StoryFn = () => (
  <div className="space-y-4">
    <SplitItem title="Push" muscles="Chest, Shoulders, Triceps"/>
    <SplitItem title="Pull" muscles="Back, Biceps"/>
    <SplitItem title="Legs" muscles="Quads, Hamstrings, Calves"/>
  </div>
);

export const AllSplits = Template.bind({});
