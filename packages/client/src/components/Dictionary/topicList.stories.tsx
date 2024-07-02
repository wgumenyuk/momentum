import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TopicList, TopicListProps } from "./topicList";

export default {
  title: "Components/Dictionary/TopicList",
  component: TopicList
} as Meta;

const Template: StoryFn<TopicListProps> = (args) => (
  <div className="p-4 bg-gray-900">
    <TopicList {...args}/>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  topics: [
    { id: "1", category: "nutrition", title: "Protein Intake", content: "Details about protein intake...", references: [] },
    { id: "2", category: "exercise", title: "Squat Form", content: "Details about proper squat form...", references: [] },
    { id: "3", category: "concepts", title: "Progressive Overload", content: "Details about progressive overload...", references: [] }
  ],
  onTopicClick: (topicId: string) => alert(`Topic clicked: ${topicId}`)
};
