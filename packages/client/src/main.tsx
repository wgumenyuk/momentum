import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Intern
import "./index.css";

const root = document.getElementById("root")!;

const router = createBrowserRouter([
  // TODO: Routen hinzufügen.
]);

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
