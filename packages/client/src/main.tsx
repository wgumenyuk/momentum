import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import { ProtectedRoute } from "$components/ProtectedRoute";
import { Navigation } from "$components/Navigation";
import { MainPage } from "$pages/MainPage";
import { LoginPage } from "$pages/auth/LoginPage";
import { LogoutPage } from "$pages/auth/LogoutPage";
import { RegisterPage } from "$pages/auth/RegisterPage";
import { HomePage } from "$pages/HomePage";
import { WorkoutsPage } from "$pages/workout/WorkoutsOverview";
import { ProfilePage } from "$pages/ProfilePage";
import "./index.css";

const root = document.getElementById("root")!;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
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
    path: "/logout",
    element: (
      <ProtectedRoute>
        <LogoutPage/>
      </ProtectedRoute>
    )
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage/>
        <Navigation/>
      </ProtectedRoute>
    )
  },
  {
    path: "/workouts",
    element: (
      <ProtectedRoute>
        <WorkoutsPage/>
        <Navigation/>
      </ProtectedRoute>
    )
  },
  {
    path: "/social",
    element: (
      <ProtectedRoute>
        {/* <SocialPage /> - not yet developed*/}
        <Navigation/>
      </ProtectedRoute>
    )
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage/>
        <Navigation/>
      </ProtectedRoute>
    )
  }
]);

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
