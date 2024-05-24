import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story/>
      </BrowserRouter>
    )
  ]
} as Meta;

const Template: StoryFn = () => <NavigationBar/>;

export const Default = Template.bind({});
