import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// Types
import type { FC, ReactNode } from "react";
import type { JwtPayload } from "@momentum/shared";

type JwtProviderProps = {
  children: ReactNode;
};

type JwtContextType = {
  jwt: JwtPayload | null;
  setToken: (token: string | null) => void;
};

const JwtContext = createContext<JwtContextType | null>(null);

/**
  Provider für den dekodierten JWT-Payload.
*/
export const JwtProvider: FC<JwtProviderProps> = ({ children }) => {
  const [ token, setToken ] = useState<string | null>(localStorage.getItem("token"));
  const [ payload, setPayload ] = useState<JwtPayload | null>(null);

  useEffect(() => {
    if(token) {
      const decoded = jwtDecode(token) as JwtPayload;
      localStorage.setItem("token", token);
      setPayload(decoded);
    } else {
      localStorage.removeItem("token");
      setPayload(null);
    }
  }, [ token ]);

  return (
    <JwtContext.Provider value={{ jwt: payload, setToken }}>
      {children}
    </JwtContext.Provider>
  );
};

/**
  Hook zum Zugreifen auf den dekodierten JWT-Payload.
*/
export const useJwt = () => {
  return useContext(JwtContext);
};
