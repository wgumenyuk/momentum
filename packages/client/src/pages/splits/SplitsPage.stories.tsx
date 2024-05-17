// src/pages/SplitsPage.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SplitsPage from "./SplitsPage";

export default {
  title: "Pages/Splits",
  component: SplitsPage
} as Meta;

// Story for SplitsPage
export const Splits: StoryFn = () => <SplitsPage/>;
Splits.storyName = "Splits Page";
