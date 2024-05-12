import Router from "@koa/router";

// Intern
import { StatusCode } from "@momentum/shared";
import { ok } from "$api/response";
import { usersRouter } from "$api/v1/users";

/**
  Router.
*/
export const router = new Router({
  prefix: "/api/v1"
});

router.use(usersRouter.routes());

router.get("/status", (ctx) => {
  ok(ctx, StatusCode.Success);
});
