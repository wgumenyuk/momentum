import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import { workoutRouter } from "$api/v1/workouts";
import { pastWorkoutRouter } from "$api/v1/past-workouts";
import { getUser, deleteUser } from "$services/user";

/**
  Nutzer-Router.
*/
export const usersRouter = new Router({
  prefix: "/users"
});

usersRouter.use(isAuthenticated);

usersRouter.use(pastWorkoutRouter.routes());
usersRouter.use(workoutRouter.routes());

usersRouter.use("/:uid", async (ctx) => {
  await getUser(ctx);
});

usersRouter.delete("/", async (ctx) => {
  await deleteUser(ctx);
});
