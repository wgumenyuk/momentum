import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Intern
import { Navigation } from "$components/Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story/>
      </BrowserRouter>
    )
  ]
} as Meta;

const Template: StoryFn = () => <Navigation/>;

export const Default = Template.bind({});
