import { request } from "$internal/api/request";

// Types
import type { Exercise } from "@momentum/shared";

type GetAllResponse = {
  exercises: Exercise[];
};

/**
  Exercises-Endpunkt.
*/
export const Exercises = {
  /**
    Ruft alle Exercises ab.
  */
  getAll: () => request<GetAllResponse>("GET", "/exercises")
};

