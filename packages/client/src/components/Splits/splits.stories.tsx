// NavigationBar.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Push_entry from "./push_entry";

export default {
  title: "Components/Push_entry",
  component: Push_entry
} as Meta;

export const Default: StoryFn = () => <Push_entry onClick={()=>{}}/>;

