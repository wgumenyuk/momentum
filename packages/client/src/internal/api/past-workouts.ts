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
  create: (data: PastWorkoutSchemaType) => request(
    "POST",
    "/past-workouts",
    data
  ),

  /**
    Ruft alle erledigten Workouts eines Nutzers ab.
  */
  getAll: () => request<GetAllResponse>(
    "GET",
    "/past-workouts"
  ),

  /**
    Ruft ein erledigtes Workout ab.
  */
  get: (workoutId: string) => request<GetResponse>(
    "GET",
    `/past-workouts/${workoutId}`
  ),

  /**
    Aktualisiert ein erledigtes Workout.
  */
  update: (
    workoutId: string,
    data: PastWorkoutSchemaType
  ) => request(
    "PUT",
    `/past-workouts/${workoutId}`,
    data
  ),

  /**
    Löscht ein erledigtes Workout.
  */
  delete: (
    workoutId: string
  ) => request(
    "DELETE",
    `/past-workouts/${workoutId}`
  )
};
