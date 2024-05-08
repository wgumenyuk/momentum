import { StoryFn, Meta } from "@storybook/react";
import TickBox from "./TickBox";
import { TickBoxProps } from "./TickBox";

export default {
  title: "Components/TickBox",
  component: TickBox,
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" }
  }
} as Meta;

const Template: StoryFn<TickBoxProps> = (args) => <TickBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  label: "Accept Terms and Conditions",
  checked: true,
  onChange: () => {}
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Accept Terms and Conditions",
  checked: false,
  onChange: () => {}
};
