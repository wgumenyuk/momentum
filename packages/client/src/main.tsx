import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import "./index.css";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import { NavigationBar } from "$components/Navigation";
import WorkoutsPage from "pages/workout/WorkoutsOverview";


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
    path: "/workouts",
    element: (
      <>
        <WorkoutsPage/>
        <NavigationBar/>
      </>
    )
  },
  {
    path: "/social",
    element: (
      <>
        {/* <SocialPage /> - not yet developed*/}
        <NavigationBar/>
      </>
    )
  },
  {
    path: "/profile",
    element: (
      <>
        {/* <ProfilePage /> - not yet developed*/}
        <NavigationBar/>
      </>
    )
  }
]);

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
