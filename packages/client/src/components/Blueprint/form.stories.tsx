import { Meta, StoryFn } from "@storybook/react";
import { BlueprintForm } from "./form";

export default {
  title: "Components/BlueprintForm",
  component: BlueprintForm
} as Meta;

const Template: StoryFn = (args) => <BlueprintForm {...args}/>;

export const Default = Template.bind({});
Default.args = {};
