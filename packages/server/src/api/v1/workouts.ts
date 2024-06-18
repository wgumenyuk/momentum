import Router from "@koa/router";
import { isAuthenticated } from "$api/middleware/auth";


// Intern
import {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} from "$services/workouts";

export const workoutRouter = new Router({
  prefix: "/splits"
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
