import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import { getUser, deleteUser, updateWeight } from "$services/user";

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

// New endpoint for updating user weight
usersRouter.put("/update-weight", async (ctx) => {
  await updateWeight(ctx);
});
