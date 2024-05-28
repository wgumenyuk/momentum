import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import { Navigation } from "$components/Navigation";
import { LoginPage } from "$pages/auth/LoginPage";
import { HomePage } from "$pages/HomePage";
import { RegisterPage } from "$pages/auth/RegisterPage";
import { MainPage } from "$pages/general/MainPage";
import { WorkoutsPage } from "$pages/workout/WorkoutsOverview";
import "./index.css";

const root = document.getElementById("root")!;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage/>
      </>
    )
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/home",
    element: (
      <>
        <MainPage/>
        <Navigation/>
      </>
    )
  },
  {
    path: "/workouts",
    element: (
      <>
        <WorkoutsPage/>
        <Navigation/>
      </>
    )
  },
  {
    path: "/social",
    element: (
      <>
        {/* <SocialPage /> - not yet developed*/}
        <Navigation/>
      </>
    )
  },
  {
    path: "/profile",
    element: (
      <>
        {/* <ProfilePage /> - not yet developed*/}
        <Navigation/>
      </>
    )
  }
]);

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
