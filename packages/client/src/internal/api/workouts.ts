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
  create: (userId: string, data: WorkoutSchemaType) => request<CreateResponse>(
    "POST",
    `/users/${userId}/workouts`,
    data
  ),

  /**
    Ruft alle Workouts eines Nutzers ab.
  */
  getAll: (userId: string) => request<GetAllResponse>(
    "GET",
    `/users/${userId}/workouts`
  ),

  /**
    Ruft ein Workout ab.
  */
  get: (userId: string, splitId: string) => request<GetResponse>(
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

