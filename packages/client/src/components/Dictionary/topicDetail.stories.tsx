import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TopicDetail, TopicDetailProps } from "./topicDetail";

export default {
  title: "Components/Dictionary/TopicDetail",
  component: TopicDetail
} as Meta;

const Template: StoryFn<TopicDetailProps> = (args) => <TopicDetail {...args}/>;

export const Default = Template.bind({});
Default.args = {
  topic: {
    id: "1",
    category: "nutrition",
    title: "Protein Intake",
    content: "Protein is essential for muscle repair and growth...",
    references: [ "https://example.com/protein-intake" ]
  }
};
