import { Meta, StoryFn } from "@storybook/react";

// Intern
import { Button } from "$components/Button";

// Types
import type { ButtonProps } from "$components/Button";

export default {
  title: "Components/Button",
  component: Button
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const BlueButton = Template.bind({});

BlueButton.args = {
  variant: "blue",
  onClick: () => alert("Clicked!")
};

export const RedButton = Template.bind({});

RedButton.args = {
  variant: "red",
  onClick: () => alert("Clicked!")
};
