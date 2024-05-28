import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import BackgroundLayout from "./BackgroundLayout";

export default {
  title: "Components/BackgroundLayout",
  component: BackgroundLayout
} as Meta;

// You can directly use the component and embed the content since there are no args to manage
export const Default: StoryFn = () => (
  <BackgroundLayout>
    <div style={{ padding: "20px" }}>This is a sample content inside the BackgroundLayout.</div>
  </BackgroundLayout>
);
