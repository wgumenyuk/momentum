import { Meta, StoryObj } from "@storybook/react";

// Intern
import { StackTop } from "$components/StackTop";

type Story = StoryObj<typeof StackTop>;

export default {
  title: "Components/StackTop",
  component: StackTop
} as Meta;

export const Default: Story = {
  render: () => <StackTop
    onCancel={() => alert("Cancel")}
    onAccept={() => alert("Accept")}
  />
};
