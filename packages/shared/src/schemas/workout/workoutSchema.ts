import { z } from "zod";
import { ExerciseSchema } from "./ExerciseSchema";

// Define the schema for a workout
export const WorkoutSchema = z.object({
  id: z.string(), // Unique identifier for the workout
  date: z.string(), // Date of the workout
  exercises: z.array(ExerciseSchema) // List of exercises
});

// Export the type for usage in other files
export type Workout = z.infer<typeof WorkoutSchema>;
