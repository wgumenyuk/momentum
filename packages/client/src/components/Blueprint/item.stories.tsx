import { Meta, StoryFn } from "@storybook/react";
import { BlueprintItem } from "./item";

export default {
  title: "Components/BlueprintItem",
  component: BlueprintItem
} as Meta;

const Template: StoryFn = (args) => <BlueprintItem name={""} description={""} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  name: "Upper Body Strength",
  description: "A workout focused on upper body strength."
};
