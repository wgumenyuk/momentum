import { Navigate } from "react-router-dom";

// Types
import type { FC, ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

/**
  Überprüft, ob ein Token sich im Local Storage befindet.
*/
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

/**
  Geschützte Route.
*/
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  if(!isAuthenticated()) {
    return <Navigate to="/login"/>; 
  }

  return children;
};
