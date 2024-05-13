// NavigationBar.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NavigationBar from "./NavigationBar";

export default {
    title: "Components/NavigationBar",
    component: NavigationBar
} as Meta;

export const Default: StoryFn = () => <NavigationBar />;
