import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Intern
import { NavigationBar } from "$components/Navigation";
import LoginPage from "$pages/auth/LoginPage";
import HomePage from "$pages/HomePage";
import RegisterPage from "$pages/auth/RegisterPage";
import MainPage from "$pages/general/MainPage";
import WorkoutsPage from "$pages/workout/WorkoutsOverview";
import "./index.css";

/**
  Helper function to check authentication status.
*/
const isAuthenticated = () => !!localStorage.getItem("token");

/**
  Protected route component.
*/
const protectedRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/login"/>;
};

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
    element: protectedRoute({
      element: (
        <>
          <MainPage/>
          <NavigationBar/>
        </>
      )
    })
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
