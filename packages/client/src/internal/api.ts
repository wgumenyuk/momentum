import type {
  Response,
  LoginSchemaType,
  SplitSchemaType,
  RegisterSchemaType,
  WorkoutSchemaType,
  PastWorkoutSchemaType
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
    
    if(response.status === 401) {
      location.href = "/login";
      return;
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
  Workouts-API.
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
  get: (userId: string, splitId: string) => request(
    "GET",
    `/users/${userId}/workouts/${splitId}`
  ),

  /**
    Aktualisiert ein Workout.
  */
  update: (userId: string, splitId: string, data: WorkoutSchemaType) => request(
    "PUT",
    `/users/${userId}/workouts/${splitId}`,
    data
  ),

  /**
    Löscht ein Workout.
  */
  delete: (userId: string, splitId: string, data: WorkoutSchemaType) => request(
    "DELETE",
    `/users/${userId}/workouts/${splitId}`,
    data
  )
};

/**
  API für erledigte Workouts.
*/
export const PastWorkouts = {
  /**
    Erstellt ein erledgites Workout.
  */
  create: (userId: string, data: PastWorkoutSchemaType) => request(
    "POST",
    `/users/${userId}/past-workouts`,
    data
  ),

  /**
    Ruft alle erledigten Workouts eines Nutzers ab.
  */
  getAll: (userId: string) => request("GET", `/users/${userId}/past-workouts`),

  /**
    Ruft ein erledigtes Workout ab.
  */
  get: (userId: string, workoutId: string) => request(
    "GET",
    `/users/${userId}/past-workouts/${workoutId}`
  ),

  /**
    Aktualisiert ein erledigtes Workout.
  */
  update: (userId: string, workoutId: string, data: PastWorkoutSchemaType) => request(
    "PUT",
    `/users/${userId}/past-workouts/${workoutId}`,
    data
  ),

  /**
    Löscht ein erledigtes Workout.
  */
  delete: (userId: string, workoutId: string, data: PastWorkoutSchemaType) => request(
    "DELETE",
    `/users/${userId}/past-workouts/${workoutId}`,
    data
  )
};

type UserGetData = {
  user: {
    id: string;
    email: string;
    createdAt: number;
  };
};

/**
  Nutzer-API.
*/
export const User = {
  /**
    Ruft ein Nutzerprofil ab.
  */
  get: (userId: string) => request<UserGetData>("GET", `/users/${userId}`),

  /**
    Löscht das eigene Nutzerkonto.
  */
  deleteAccount: () => request("DELETE", "/users/delete")
};

/**
  Exercises-API.
*/
export const Exercises = {

  /**
    Erstellt ein Workout.
  */
  create: (userId: string, data: WorkoutSchemaType) => request(
    "POST",
    `/users/${userId}/exercises`,
    data
  ),

  /**
    Ruft alle Exercises ab.
  */
  getAll: () => request("GET", "/exercises")
};
