import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import { splitRouter } from "$api/v1/splits";
import { workoutRouter } from "$api/v1/workout";
import { deleteUser } from "$services/user";

/**
  Nutzer-Router.
*/
export const usersRouter = new Router({
  prefix: "/users"
});

usersRouter.use(isAuthenticated);

usersRouter.use(splitRouter.routes());
usersRouter.use(workoutRouter.routes());

usersRouter.delete("/", async (ctx) => {
  await deleteUser(ctx);
});
