import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import { getUser, deleteUser } from "$services/user";

/**
  Nutzer-Router.
*/
export const usersRouter = new Router({
  prefix: "/users"
});

usersRouter.use(isAuthenticated);

usersRouter.get("/:uid", async (ctx) => {
  await getUser(ctx);
});

usersRouter.delete("/", async (ctx) => {
  await deleteUser(ctx);
});
