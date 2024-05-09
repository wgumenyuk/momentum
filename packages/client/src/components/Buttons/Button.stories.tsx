import { Meta, StoryFn } from "@storybook/react";
import BigButtonBlue from "./BigButtonBlue";
import BigButtonRed from "./BigButtonRed";

export default {
  title: "Components/BigButtons"
} as Meta;

const TemplateBlue: StoryFn<{ text: string; onClick: () => void }> = (args) => <BigButtonBlue {...args} />;
const TemplateRed: StoryFn<{ text: string; onClick: () => void }> = (args) => <BigButtonRed {...args} />;

export const DefaultBigButtonBlue = TemplateBlue.bind({});
DefaultBigButtonBlue.args = {
  text: "Sign Up",
  onClick: () => alert("Clicked!")
};

export const DefaultBigButtonRed = TemplateRed.bind({});
DefaultBigButtonRed.args = {
  text: "Delete account",
  onClick: () => alert("Clicked!")
};
