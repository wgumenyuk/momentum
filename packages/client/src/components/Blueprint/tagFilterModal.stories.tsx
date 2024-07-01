import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TagFilterModal } from "./tagFilterModal";

export default {
  title: "Components/TagFilterModal",
  component: TagFilterModal,
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

const Template: StoryFn = (args) => {
  const [ selectedTags, setSelectedTags ] = useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    setSelectedTags((prev) => [ ...prev, tag ]);
  };

  const handleDeselectTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleClose = () => {
    console.log("Modal closed");
  };

  return (
    <TagFilterModal
      tags={[]} {...args}
      selectedTags={selectedTags}
      onSelectTag={handleSelectTag}
      onDeselectTag={handleDeselectTag}
      onClose={handleClose}/>
  );
};

export const Default = Template.bind({});
Default.args = {
  tags: [
    "45 Minutes", "Hypertrophy", "Muscle Balance", "Beginner", "Intermediate", "Advanced", "Full Body",
    "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves",
    "60 Minutes", "Muscle Growth", "Balanced", "Arms Focused", "Powerlifting", "Strength", "Strength Endurance",
    "Time Efficient", "Calisthenics"
  ],
  selectedTags: []
};
