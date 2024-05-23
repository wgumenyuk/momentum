import { Meta, StoryObj } from "@storybook/react";

// Intern
import { SetSettings } from "$components/SetSettings";

type Story = StoryObj<typeof SetSettings>;

export default {
  title: "Components/SetSettings",
  component: SetSettings
} as Meta;

export const Default: Story = {
  render: () => <SetSettings
    id={1}
    onChange={() => {}}
    onDelete={() => alert("Delete")}
  />
};
