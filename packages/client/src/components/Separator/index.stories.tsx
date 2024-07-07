import { Meta, StoryFn } from "@storybook/react";
import { Separator } from ".";

export default {
  title: "Components/Separator",
  component: Separator
} as Meta;

const Template: StoryFn = () => (
  <div className="space-y-4">
    <Separator/>
  </div>
);

export const Default = Template.bind({});
