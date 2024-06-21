import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import {
  getUser,
  updateDisplayName,
  deleteUser
} from "$services/user";

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

usersRouter.put("/display-name", async (ctx) => {
  await updateDisplayName(ctx);
});

usersRouter.delete("/", async (ctx) => {
  await deleteUser(ctx);
});
