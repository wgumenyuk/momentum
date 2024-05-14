import { z } from "zod";
import { WorkoutSchema } from "./WorkoutSchema";

/**
 * Schema for a split.
 */
export const SplitSchema = z.object({
  id: z.string(), // Unique identifier for the split
  name: z.string(), // Name of the split
  workouts: z.array(z.object({
    type: z.enum([
      "Push", 
      "Pull", 
      "Legs", 
      "Upper Body", 
      "Lower Body", 
      "Full Body", 
      "Cardio", 
      "Rest",
      "Arms",
      "Chest and Back",
      "Shoulders and Arms",
      "Chest",
      "Back",
      "Shoulders"
    ]), // Type of split
    workout: WorkoutSchema // Workout for the type
  }))
});

/**
 * Type for a split inferred from SplitSchema.
 * @typedef {z.infer<typeof SplitSchema>} Split
 */
export type Split = z.infer<typeof SplitSchema>;
