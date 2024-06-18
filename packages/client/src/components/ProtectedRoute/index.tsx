import { Navigate } from "react-router-dom";

// Intern
import { useJwt } from "$components/JwtContext";

// Types
import type { FC, ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

const isDev = import.meta.env.DEV;
const bypassLogin = import.meta.env.BYPASS_LOGIN;

/**
  Geschützte Route.
*/
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { jwt } = useJwt()!;

  if(!jwt) {
    return (isDev && bypassLogin) ? children : <Navigate to="/login"/>;
  }

  return children;
};
