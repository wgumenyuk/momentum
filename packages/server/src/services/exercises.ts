import { Exercise } from "packages/server/src/models/exercise.ts"; // Adjust path as necessary

// Function to fetch exercises, filtered by muscle group if specified
export async function getExercises(ctx) {
  try {
    const muscleGroup = ctx.query.muscleGroup;
    let query = {};

    if (muscleGroup) {
      query = { muscleGroups: { $in: [muscleGroup] } };
    }

    const exercises = await Exercise.find(query);
    ctx.status = 200;
    ctx.body = exercises;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: "An error occurred while retrieving the exercises.", error: error.message };
  }
}
