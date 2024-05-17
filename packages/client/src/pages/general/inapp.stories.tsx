import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MainPage from "./MainPage";

export default {
  title: "Pages/General",
  component: MainPage
} as Meta;

// Story for MainPage
export const Main: StoryFn = () => <MainPage/>;
Main.storyName = "Main Page";
