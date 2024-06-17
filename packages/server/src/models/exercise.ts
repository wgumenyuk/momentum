import { Schema, model } from "mongoose";

// Types
import type { Exercise as ExerciseType } from "@momentum/shared";

const ExerciseSchema = new Schema<ExerciseType>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  muscleGroups: {
    type: [ String ],
    required: true
  },
  equipment: {
    type: [ String ],
    required: true
  },
  difficulty: {
    type: "string",
    required: true,
    enum: [
      "easy",
      "intermediate",
      "advanced"
    ]
  }
});

/**
  `Exercise`-Modell.
*/
export const Exercise = model<ExerciseType>("Exercise", ExerciseSchema);
