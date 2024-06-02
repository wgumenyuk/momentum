import { Schema, model } from "mongoose";

// Types
import type { Exercise } from "$models/workout";

/**
  Erledigtes Workout. 
*/
type PastWorkout = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzer-ID.
  */
  userId: string;

  /**
    Split-ID. 
  */
  splitId: string;

  /**
    Liste von Übungen. 
  */
  exercises: Exercise[];

  /**
    Zeitpunkt des Starts. 
  */
  startedAt: number;

  /**
    Zeitpunkt des Endes. 
  */
  finishedAt: number;
};

const PastWorkoutSchema = new Schema<PastWorkout>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  userId: {
    type: "string",
    required: true
  },
  splitId: {
    type: "string",
    required: true
  },
  exercises: {
    type: [
      {
        exerciseId: "string",
        sets: "number",
        reps: "number"
      }
    ]
  },
  startedAt: {
    type: "number"
  },
  finishedAt: {
    type: "number"
  }
});

/**
  `PastWorkout`-Modell. 
*/
export const PastWorkout = model<PastWorkout>("PastWorkout", PastWorkoutSchema);
