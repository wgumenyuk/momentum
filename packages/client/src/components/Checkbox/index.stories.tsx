import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";

// Intern
import { Checkbox } from "$components/Checkbox";

// Types
import type { CheckboxProps } from "$components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args}/>;

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
    <Checkbox
      variant="terms"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const RememberMe = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <Checkbox
      variant="rememberMe"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const SubscribeToNewsletter = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <Checkbox
      variant="subscribe"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const TermsAndConditions = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <Checkbox
      variant="terms"
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};
