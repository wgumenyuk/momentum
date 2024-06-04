import { Meta, StoryObj } from "@storybook/react";

// Intern
import { Switch } from "$components/Switch";

type Story = StoryObj<typeof Switch>;

export default {
  title: "Components/Switch",
  component: Switch
} satisfies Meta;

export const Active: Story = {
  render: () => <Switch
    isActive={true} 
    onChange={() => {}}
  />
};

export const Inactive: Story = {
  render: () => <Switch
    isActive={false} 
    onChange={() => {}}
  />
};
