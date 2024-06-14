import { request } from "$internal/api/request";

// Types
import type { WorkoutSchemaType, Workout as WorkoutType } from "@momentum/shared";

type CreateResponse = {
  id: string;
};

type GetAllResponse = {
  workouts: WorkoutType[];
};

type GetResponse = {
  workout: WorkoutType;
};

/**
  Workouts-Endpunkt.
*/
export const Workouts = {
  /**
    Erstellt ein Workout.
  */
  create: (data: WorkoutSchemaType) => request<CreateResponse>(
    "POST",
    "/workouts",
    data
  ),

  /**
    Ruft alle Workouts eines Nutzers ab.
  */
  getAll: () => request<GetAllResponse>(
    "GET",
    "/workouts"
  ),

  /**
    Ruft ein Workout ab.
  */
  get: (workoutId: string) => request<GetResponse>(
    "GET",
    `/workouts/${workoutId}`
  ),

  /**
    Aktualisiert ein Workout.
  */
  update: (workoutId: string, data: WorkoutSchemaType) => request(
    "PUT",
    `/workouts/${workoutId}`,
    data
  ),

  /**
    Löscht ein Workout.
  */
  delete: (workoutId: string) => request(
    "DELETE",
    `/workouts/${workoutId}`
  )
};

