import Router from "@koa/router";
import { login, register } from "$services/auth";
import { logout } from "$services/logout";
import { isAuthenticated, isUnauthenticated } from "$api/middleware/auth";

export const usersRouter = new Router({
  prefix: "/auth"
});

usersRouter.post("/login", isUnauthenticated, async (ctx) => {
  await login (ctx);
});

usersRouter.post("/register" , isUnauthenticated, async (ctx) => {
  await register (ctx);
});

usersRouter.post("/logout", isAuthenticated, async (ctx) => {
  await logout (ctx);
});
