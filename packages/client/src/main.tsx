import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import "./index.css";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";

const root = document.getElementById("root")!;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
]);

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
