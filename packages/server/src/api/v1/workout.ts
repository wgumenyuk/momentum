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

workoutRouter.post("/", isAuthenticated, async (ctx) => {
  await createWorkout(ctx);
});

workoutRouter.get("/:id", isAuthenticated, async (ctx) => {
  await getWorkout(ctx);
});

workoutRouter.get("/", isAuthenticated, async (ctx) => {
  await getWorkouts(ctx);
});

workoutRouter.put("/:id", isAuthenticated, async (ctx) => {
  await updateWorkout(ctx);
});

workoutRouter.delete("/:id", isAuthenticated, async (ctx) => {
  await deleteWorkout(ctx);
});
