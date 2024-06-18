import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// Types
import type { FC, ReactNode } from "react";
import type { JwtPayload } from "@momentum/shared";

type JwtProviderProps = {
  children: ReactNode;
};

const JwtContext = createContext<JwtPayload | null>(null);

/**
  Provider für den dekodierten JWT-Payload.
*/
export const JwtProvider: FC<JwtProviderProps> = ({ children }) => {
  const decodeJwt = () => {
    const token = localStorage.getItem("token");
    
    if(!token) {
      return null;
    }

    return jwtDecode<JwtPayload>(token);
  };

  const [ payload, setPayload ] = useState<JwtPayload | null>(decodeJwt());

  useEffect(() => {
    const onStorage = () => {
      setPayload(decodeJwt());
    };

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <JwtContext.Provider value={payload}>
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
