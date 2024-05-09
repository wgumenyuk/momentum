import { Meta, StoryFn } from "@storybook/react";
import BigButton from "./BigButton";

export default {
  title: "Components/BigButton",
  component: BigButton
} as Meta;

const Template: StoryFn<{ text: string; onClick: () => void }> = (args) => <BigButton {...args} />;

export const DefaultBigButton = Template.bind({});
DefaultBigButton.args = {
  text: "Sign Up",
  onClick: () => alert("Clicked!")
};
