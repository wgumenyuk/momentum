import type { Response } from "@momentum/shared";

/**
  HTTP-Methode.
*/
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

/**
  API-Endpunkt.
*/
export type Endpoint = `/${string}`;

/**
  Basis-URL der API.
*/
const BASE_URL = (import.meta.env.DEV) ?
  import.meta.env.VITE_API_BASE_URL_DEV :
  import.meta.env.VITE_API_BASE_URL_PROD;

/**
  Schlüssel im Local-Storage für das JWT.
*/
const TOKEN_KEY = "token";

/**
  Timeout der Anfrage in Sekunden.
*/
const REQUEST_TIMEOUT = 1000 * 10;

/**
  Schickt eine HTTP-Anfrage an den Server.
*/
export const request = async <T extends Record<string, unknown> = Record<string, never>>(
  method: HttpMethod,
  endpoint: Endpoint,
  data?: Record<string, unknown>
) => {
  const url = BASE_URL + endpoint;

  const headers: Record<string, string> = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  // JWT in HTTP-Headers anhängen, falls vorhanden.
  if(localStorage.getItem(TOKEN_KEY)) {
    headers["Authorization"] = localStorage.getItem(TOKEN_KEY)!;
  }

  const request: RequestInit = {
    method,
    headers,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT)
  };

  // Body anhängen für POST- und PUT-Anfragen.
  if((method === "POST" || method === "PUT") && !!data) {
    request.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, request);
    
    if(response.status === 401) {
      localStorage.removeItem("token");
      location.href = "/login";
      return;
    }

    return response.json() as Promise<Response<T>>;
  } catch(err) {
    console.error("Failed to fetch data from API", err);
    return null;
  }
};

