import { Meta, StoryFn } from "@storybook/react";
import { BlueprintList } from "./list";

export default {
  title: "Components/BlueprintList",
  component: BlueprintList
} as Meta;

const Template: StoryFn = (args) => <BlueprintList blueprints={[]} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  blueprints: [
    { id: "1", name: "Upper Body Strength", description: "A workout focused on upper body strength." },
    { id: "2", name: "Leg Day", description: "A workout focused on leg strength." }
  ]
};
