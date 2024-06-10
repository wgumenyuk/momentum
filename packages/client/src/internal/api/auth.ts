import { request } from "$internal/api/request";

// Types
import { LoginSchemaType, RegisterSchemaType } from "@momentum/shared";

type LoginResponse = {
  token: string;
};

/**
  Auth-Endpunkt.
*/
export const Auth = {
  /**
    Meldet den Nutzer an.
  */
  login: (data: LoginSchemaType) => request<LoginResponse>(
    "POST",
    "/auth/login",
    data
  ),

  /**
    Registriert ein neues Konto.
  */
  register: (data: RegisterSchemaType) => request(
    "POST",
    "/auth/register",
    data
  ),

  /**
    Meldet den Nutzer ab.
  */
  logout: () => request("POST", "/auth/logout")
};
