import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import { JwtProvider } from "$components/JwtContext";
import { WorkoutProvider } from "$components/WorkoutContext";
import { ProtectedRoute } from "$components/ProtectedRoute";
import { Navigation } from "$components/Navigation";
import { MainPage } from "$pages/MainPage";
import { LoginPage } from "$pages/auth/LoginPage";
import { LogoutPage } from "$pages/auth/LogoutPage";
import { RegisterPage } from "$pages/auth/RegisterPage";
import { HomePage } from "$pages/HomePage";
import { ProfilePage } from "$pages/ProfilePage";
import { SocialPage } from "$pages/social";
import { WorkoutsPage } from "$pages/workouts";
import { WorkoutPage } from "$pages/WorkoutPage";
import { NotFoundPage } from "$pages/NotFound";
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
    element: (
      <ProtectedRoute>
        <WorkoutProvider/>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/workout",
        element: <WorkoutPage/>
      },
      {
        path: "/workouts",
        element: <WorkoutsPage/>
      }
    ]
  },
  {
    path: "/social",
    element: (
      <ProtectedRoute>
        <SocialPage/>
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
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
], {
  basename: (process.env.NODE_ENV === "production") ? "/momentum" : ""
});

createRoot(root).render(
  <React.StrictMode>
    <JwtProvider>
      <RouterProvider router={router}/>
    </JwtProvider>
  </React.StrictMode>
);
