import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import { JwtProvider } from "$components/JwtContext";
import { ProtectedRoute } from "$components/ProtectedRoute";
import { Navigation } from "$components/Navigation";
import { MainPage } from "$pages/MainPage";
import { LoginPage } from "$pages/auth/LoginPage";
import { LogoutPage } from "$pages/auth/LogoutPage";
import { RegisterPage } from "$pages/auth/RegisterPage";
import { HomePage } from "$pages/HomePage";
import { ProfilePage } from "$pages/ProfilePage";
import { SocialPage } from "$pages/social";
import { WorkoutPage } from "$pages/workout";
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
    path: "/workouts",
    element: (
      <ProtectedRoute>
        <WorkoutPage/>
      </ProtectedRoute>
    )
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
]);

createRoot(root).render(
  <React.StrictMode>
    <JwtProvider>
      <RouterProvider router={router}/>
    </JwtProvider>
  </React.StrictMode>
);
