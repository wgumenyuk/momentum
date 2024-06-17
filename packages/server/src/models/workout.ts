import { Schema, model } from "mongoose";

// Types
import type { Workout as WorkoutType } from "@momentum/shared";

const WorkoutSchema = new Schema<WorkoutType>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  userId: {
    type: "string",
    required: true
  },
  name: {
    type: "string",
    required: true
  },
  description: {
    type: "string"
  },
  exercises: {
    type: [
      {
        exerciseId: "string",
        sets: "number",
        reps: "number"
      }
    ]
  }
});

/**
  `Workout`-Modell. 
*/
export const Workout = model<WorkoutType>("Workout", WorkoutSchema);
