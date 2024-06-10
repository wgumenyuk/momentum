import { request } from "$internal/api/request";

// Types
import type {
  PastWorkoutSchemaType,
  PastWorkout as PastWorkoutType
} from "@momentum/shared";

type GetAllResponse = {
  workouts: PastWorkoutType[];
};

type GetResponse = {
  workout: PastWorkoutType;
};

/**
  Endpunkt für erledigte Workouts.
*/
export const PastWorkouts = {
  /**
    Erstellt ein erledigtes Workout.
  */
  create: (userId: string, data: PastWorkoutSchemaType) => request(
    "POST",
    `/users/${userId}/past-workouts`,
    data
  ),

  /**
    Ruft alle erledigten Workouts eines Nutzers ab.
  */
  getAll: (userId: string) => request<GetAllResponse>(
    "GET",
    `/users/${userId}/past-workouts`
  ),

  /**
    Ruft ein erledigtes Workout ab.
  */
  get: (userId: string, workoutId: string) => request<GetResponse>(
    "GET",
    `/users/${userId}/past-workouts/${workoutId}`
  ),

  /**
    Aktualisiert ein erledigtes Workout.
  */
  update: (
    userId: string,
    workoutId: string,
    data: PastWorkoutSchemaType
  ) => request(
    "PUT",
    `/users/${userId}/past-workouts/${workoutId}`,
    data
  ),

  /**
    Löscht ein erledigtes Workout.
  */
  delete: (
    userId: string,
    workoutId: string,
    data: PastWorkoutSchemaType
  ) => request(
    "DELETE",
    `/users/${userId}/past-workouts/${workoutId}`,
    data
  )
};

