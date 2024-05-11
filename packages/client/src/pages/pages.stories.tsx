import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
export default {
  title: "Pages/Auth",
  component: RegisterPage,
  subcomponents: { LoginPage }
} as Meta;

// Story for RegisterPage
export const Register: StoryFn = () => <RegisterPage />;
Register.storyName = "Register Page";

// Story for LoginPage
export const Login: StoryFn = () => <LoginPage />;
Login.storyName = "Login Page";
