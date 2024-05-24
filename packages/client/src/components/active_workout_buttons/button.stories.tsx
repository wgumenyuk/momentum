// NavigationBar.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RoundButton from "./button";

export default {
  title: "Components/button",
  component: RoundButton
} as Meta;

export const Default: StoryFn = () => <RoundButton/>;
