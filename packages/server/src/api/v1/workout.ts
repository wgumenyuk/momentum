import Router from "@koa/router";
import {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} from "$services/workout";
import { isAuthenticated } from "$api/middleware/auth";

export const workoutRouter = new Router({
  prefix: "/users/:uid/workouts"
});

workoutRouter.use(isAuthenticated);

workoutRouter.post("/", async (ctx) => {
  await createWorkout(ctx);
});

workoutRouter.get("/:id", async (ctx) => {
  await getWorkout(ctx);
});

workoutRouter.get("/", async (ctx) => {
  await getWorkouts(ctx);
});

workoutRouter.put("/:id", async (ctx) => {
  await updateWorkout(ctx);
});

workoutRouter.delete("/:id", async (ctx) => {
  await deleteWorkout(ctx);
});
