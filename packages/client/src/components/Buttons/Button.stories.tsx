import { Meta, StoryFn } from "@storybook/react";
import BigButton from "./BigButton";

export default {
  title: "Components/BigButton",
  component: BigButton
} as Meta;

const Template: StoryFn<{ text: string; onClick: () => void; variant: "blue" | "red" }> = (args) => <BigButton {...args}/>;

export const DefaultBigButtonBlue = Template.bind({});
DefaultBigButtonBlue.args = {
  text: "Sign Up",
  onClick: () => alert("Clicked!"),
  variant: "blue"
};

export const DefaultBigButtonRed = Template.bind({});
DefaultBigButtonRed.args = {
  text: "Delete account",
  onClick: () => alert("Clicked!"),
  variant: "red"
};
