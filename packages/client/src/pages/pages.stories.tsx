import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RegisterPage from "../pages/RegisterPage";

export default {
  title: "Pages/RegisterPage",
  component: RegisterPage
} as Meta;

export const Default: StoryFn = () => <RegisterPage />;
