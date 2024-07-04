import { Workout as WorkoutType } from "@momentum/shared";
import { seeder } from "$internal/seeder";
import { Workout } from "$models/workout";

const workoutSeeds: WorkoutType[] = [
  {
    id: "workout_1",
    userId: "test_user_1",  // Reference the test user
    name: "Upper Body Strength",
    description: "A workout focused on upper body strength.",
    exercises: [
      {
        exerciseId: "bench_press",
        sets: 3,
        reps: 10
      },
      {
        exerciseId: "cable_curls",
        sets: 3,
        reps: 12
      }
    ]
  },
  {
    id: "workout_2",
    userId: "test_user_1",  // Reference the test user
    name: "Leg Day",
    description: "A workout focused on leg strength.",
    exercises: [
      {
        exerciseId: "deadlifts",
        sets: 4,
        reps: 8
      },
      {
        exerciseId: "wide_stance_squats",
        sets: 3,
        reps: 10
      }
    ]
  }
];

/**
  Seeding process for the `Workout` model.
*/
export const seedWorkouts = () => {
  return seeder(Workout, workoutSeeds);
};
