import Router from "@koa/router";

// Intern
import {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} from "$services/workouts";

export const workoutRouter = new Router({
  prefix: "/:uid/workouts"
});

workoutRouter.post("/", async (ctx) => {
  await createWorkout(ctx);
});

workoutRouter.get("/:wid", async (ctx) => {
  await getWorkout(ctx);
});

workoutRouter.get("/", async (ctx) => {
  await getWorkouts(ctx);
});

workoutRouter.put("/:wid", async (ctx) => {
  await updateWorkout(ctx);
});

workoutRouter.delete("/:wid", async (ctx) => {
  await deleteWorkout(ctx);
});
