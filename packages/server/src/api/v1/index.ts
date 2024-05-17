import Router from "@koa/router";

// Intern
import { StatusCode } from "@momentum/shared";
import { ok } from "$api/response";
import { authRouter } from "$api/v1/auth";
import { usersRouter } from "$api/v1/users";
import { workoutRouter } from "$api/v1/workout";

/**
  Router.
*/
export const router = new Router({
  prefix: "/api/v1"
});

router.use(authRouter.routes());
router.use(usersRouter.routes());
router.use(workoutRouter.routes());

router.get("/status", (ctx) => {
  ok(ctx, StatusCode.Success);
});
