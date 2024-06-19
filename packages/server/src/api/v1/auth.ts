import Router from "@koa/router";

// Intern
import { isAuthenticated, isUnauthenticated } from "$api/middleware/auth";
import { login, register, logout } from "$services/auth";

export const authRouter = new Router({
  prefix: "/auth"
});

authRouter.post("/login", isUnauthenticated, async (ctx) => {
  await login(ctx);
});

authRouter.post("/register", async (ctx) => {
  await register(ctx);
});

authRouter.post("/logout", isAuthenticated, async (ctx) => {
  await logout(ctx);
});
