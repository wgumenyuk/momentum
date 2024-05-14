import { z } from "zod";

// Define the schema for an exercise
const ExerciseSchema = z.object({
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

// Define the schema for a workout
const WorkoutSchema = z.object({
  id: z.string(), // Unique identifier for the workout
  date: z.string(), // Date of the workout
  exercises: z.array(ExerciseSchema) // List of exercises
});

// Example usage
const exampleWorkout = {
  id: "workout123",
  date: "2024-05-14",
  exercises: [
    {
      id: "exercise1",
      name: "Push Up",
      repetitions: 15,
      sets: 3,
      weight: 0,
      muscleGroups: [ "Chest", "Triceps", "Shoulders" ],
      deviceSetting: "Low",
      note: "Focus on form"
    },
    {
      id: "exercise2",
      name: "Squat",
      repetitions: 10,
      sets: 3,
      weight: 50,
      muscleGroups: [ "Quadriceps", "Glutes", "Hamstrings" ],
      note: "Increase weight next time"
    }
  ]
};

// Validate the example workout
try {
  WorkoutSchema.parse(exampleWorkout);
  console.log("Workout is valid");
} catch (e) {
  const error = e as z.ZodError;
  console.error("Workout is invalid", error.errors);
}
