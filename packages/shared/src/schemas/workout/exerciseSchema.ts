import { z } from "zod";

// Define the schema for an exercise
export const ExerciseSchema = z.object({
  id: z.string(), // Unique identifier for the exercise
  name: z.string(), // Name of the exercise
  repetitions: z.number().int().positive(), // Number of repetitions
  sets: z.number().int().positive(), // Number of sets
  weight: z.number().nonnegative().optional(), // Weight used (optional)
  duration: z.number().nonnegative().optional(), // Duration (optional, e.g., for exercises like running)
  muscleGroups: z.array(z.string()), // List of muscle groups targeted
  deviceSetting: z.string().optional(), // Device setting (optional)
  note: z.string().optional() // Note (optional)
});

// Export the type for usage in other files
export type Exercise = z.infer<typeof ExerciseSchema>;
