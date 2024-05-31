import Router from "@koa/router";

// Intern
import {
  createPastWorkout,
  getPastWorkout,
  getPastWorkouts,
  updatePastWorkout,
  deletePastWorkout
} from "$services/past-workouts";

export const pastWorkoutRouter = new Router({
  prefix: "/:uid/workouts"
});

pastWorkoutRouter.post("/", async (ctx) => {
  await createPastWorkout(ctx);
});

pastWorkoutRouter.get("/:id", async (ctx) => {
  await getPastWorkout(ctx);
});

pastWorkoutRouter.get("/", async (ctx) => {
  await getPastWorkouts(ctx);
});

pastWorkoutRouter.put("/:id", async (ctx) => {
  await updatePastWorkout(ctx);
});

pastWorkoutRouter.delete("/:id", async (ctx) => {
  await deletePastWorkout(ctx);
});
