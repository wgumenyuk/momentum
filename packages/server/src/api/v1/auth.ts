import Router from "@koa/router";
import { login, register } from "$services/auth";
import { logout } from "$services/logout";
import { isAuthenticated, isUnauthenticated } from "$api/middleware/auth";

export const authRouter = new Router({
  prefix: "/auth"
});

authRouter.post("/login", isUnauthenticated, async (ctx) => {
  await login (ctx);
});

authRouter.post("/register" , isUnauthenticated, async (ctx) => {
  await register (ctx);
});

authRouter.post("/logout", isAuthenticated, async (ctx) => {
  await logout (ctx);
});
