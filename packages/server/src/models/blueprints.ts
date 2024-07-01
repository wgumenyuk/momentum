import { Schema, model } from "mongoose";

// Types
import type { Blueprint as BlueprintType } from "@momentum/shared";

const BlueprintSchema = new Schema<BlueprintType>({
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
  tags: {
    type: [ String ]
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
  `Blueprint`-Modell.
*/
export const Blueprint = model<BlueprintType>("Blueprint", BlueprintSchema);
