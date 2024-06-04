import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import { Navigation } from "$components/Navigation";
import { MainPage } from "$pages/MainPage";
import { HomePage } from "$pages/HomePage";
import { LoginPage } from "$pages/auth/LoginPage";
import { RegisterPage } from "$pages/auth/RegisterPage";
import { WorkoutsPage } from "$pages/workout/WorkoutsOverview";
import "./index.css";
import LandingPage from "$pages/general/landing_page";

const root = document.getElementById("root")!;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "landing_page",
    element: <LandingPage/>
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
        <HomePage/>
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
