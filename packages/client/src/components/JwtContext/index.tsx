import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// Types
import type { FC, ReactNode } from "react";
import type { JwtPayload } from "jwt-decode";

type JwtProviderProps = {
  children: ReactNode;
};

const JwtContext = createContext<JwtPayload>({});

/**
  Provider für den dekodierten JWT-Payload.
*/
export const JwtProvider: FC<JwtProviderProps> = ({ children }) => {
  const [ payload, setPayload ] = useState<JwtPayload>({});

  useEffect(() => {
    const decodeJwt = () => {
      const token = localStorage.getItem("token");
      
      if(!token) {
        return;
      }

      const decoded = jwtDecode(token);
      setPayload(decoded);
    };

    decodeJwt();

    window.addEventListener("storage", decodeJwt);

    return () => {
      window.removeEventListener("storage", decodeJwt);
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
