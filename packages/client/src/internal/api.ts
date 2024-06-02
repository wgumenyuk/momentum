import type {
  Response,
  LoginSchemaType,
  RegisterSchemaType,
  SplitSchemaType,
  WorkoutSchemaType
} from "@momentum/shared";

/**
  HTTP-Methode.
*/
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

/**
  API-Endpunkt.
*/
type Endpoint = `/${string}`;

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
const request = async <T extends Record<string, unknown> = Record<string, never>>(
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
    
    // Check if the response is 401 Unauthorized
    if(response.status === 401) {
      throw new Error("Unauthorized");
    }

    return response.json() as Promise<Response<T>>;
  } catch(err) {
    console.error("Failed to fetch data from API", err);
    return null;
  }
};

/**
  Auth-API.
*/
export const Auth = {
  /**
    Meldet den Nutzer an.
  */
  login: (data: LoginSchemaType) => request<{ token: string; }>(
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
  logout: () => request( "POST", "/auth/logout")
};

/**
  Splits-API.
*/
export const Splits = {
  /**
    Erstellt einen Split.
  */
  create: (userId: string, data: SplitSchemaType) => request(
    "POST",
    `/users/${userId}/splits`,
    data
  ),

  /**
    Ruft alle Splits eines Nutzers ab.
  */
  getAll: (userId: string) => request("GET", `/users/${userId}/splits`),

  /**
    Ruft einen Split ab.
  */
  get: (userId: string, splitId: string) => request(
    "GET",
    `/users/${userId}/splits/${splitId}`
  ),

  /**
    Aktualisiert einen Split.
  */
  update: (userId: string, splitId: string, data: SplitSchemaType) => request(
    "PUT",
    `/users/${userId}/splits/${splitId}`,
    data
  ),

  /**
    Löscht einen Split.
  */
  delete: (userId: string, splitId: string, data: SplitSchemaType) => request(
    "DELETE",
    `/users/${userId}/splits/${splitId}`,
    data
  )
};

/**
  Workout-API.
*/
export const Workouts = {
  /**
    Erstellt ein Workout.
  */
  create: (userId: string, data: WorkoutSchemaType) => request(
    "POST",
    `/users/${userId}/workouts`,
    data
  ),

  /**
    Ruft alle Workouts eines Nutzers ab.
  */
  getAll: (userId: string) => request("GET", `/users/${userId}/workouts`),

  /**
    Ruft ein Workout ab.
  */
  get: (userId: string, workoutId: string) => request(
    "GET",
    `/users/${userId}/workouts/${workoutId}`
  ),

  /**
    Aktualisiert ein Workout.
  */
  update: (userId: string, workoutId: string, data: WorkoutSchemaType) => request(
    "PUT",
    `/users/${userId}/workouts/${workoutId}`,
    data
  ),

  /**
    Löscht ein Workout.
  */
  delete: (userId: string, workoutId: string, data: WorkoutSchemaType) => request(
    "DELETE",
    `/users/${userId}/workout/${workoutId}`,
    data
  )
};

/**
  Nutzer-API.
*/
export const User = {
  /**
    Löscht das eigene Nutzerkonto.
  */
  deleteAccount: () => request("DELETE", "/users/delete")
};
