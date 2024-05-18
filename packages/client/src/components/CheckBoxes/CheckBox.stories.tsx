import { StoryFn, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import CheckBox from "./CheckBox";
import { CheckBoxProps } from "./CheckBox";
import { useState } from "react";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  argTypes: {
    checked: { control: "boolean" }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story/>
      </MemoryRouter>
    )
  ]
} as Meta;

const Template: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args}/>;

export const Checked = Template.bind({});
Checked.args = {
  variant: "terms",
  checked: true,
  onChange: () => {}
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  variant: "terms",
  checked: false,
  onChange: () => {}
};

export const Interactive = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <CheckBox
      variant="terms"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const RememberMe = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <CheckBox
      variant="rememberMe"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const SubscribeToNewsletter = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <CheckBox
      variant="subscribe"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const TermsAndConditions = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <CheckBox
      variant="terms"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};
