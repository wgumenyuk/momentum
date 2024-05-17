import { StoryFn, Meta } from "@storybook/react";
import CheckBox from "./CheckBox";
import { CheckBoxProps } from "./CheckBox";
import { useState } from "react";
import RememberMeCheckbox from "./RememberMeCheckBox";
import SubscribeToNewsletterCheckbox from "./SubscribeToNewsletterCheckBox";
import TermsAndConditionsCheckBox from "./TermsAndConditionsCheckBox";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" }
  }
} as Meta;

const Template: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args}/>;

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

export const Interactive = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <CheckBox
      label="Interactive Checkbox"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const RememberMe = () => {
  return <RememberMeCheckbox/>;
};

export const SubscribeToNewsletter = () => {
  return <SubscribeToNewsletterCheckbox/>;
};

export const TermsAndConditions = () => {
  return <TermsAndConditionsCheckBox/>;
};
