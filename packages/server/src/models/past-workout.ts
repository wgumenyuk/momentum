import { Schema, model } from "mongoose";

// Types
import type { PastWorkout as PastWorkoutType } from "@momentum/shared";

const PastWorkoutSchema = new Schema<PastWorkoutType>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  userId: {
    type: "string",
    required: true
  },
  workoutId: {
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
export const PastWorkout = model<PastWorkoutType>("PastWorkout", PastWorkoutSchema);
