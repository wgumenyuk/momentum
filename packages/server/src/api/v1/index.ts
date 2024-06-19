import Router from "@koa/router";

// Intern
import { StatusCode } from "@momentum/shared";
import { ok } from "$api/response";
import { authRouter } from "$api/v1/auth";
import { usersRouter } from "$api/v1/users";
import { workoutRouter } from "$api/v1/workouts";
import { pastWorkoutRouter } from "$api/v1/past-workouts";
import { friendshipRouter } from "$api/v1/friendship";
import { eventsRouter } from "$api/v1/events";

/**
  Router.
*/
export const router = new Router({
  prefix: "/api/v1"
});

router.use(authRouter.routes());
router.use(usersRouter.routes());
router.use(workoutRouter.routes());
router.use(pastWorkoutRouter.routes());
router.use(friendshipRouter.routes());
router.use(eventsRouter.routes());

router.get("/status", (ctx) => {
  ok(ctx, StatusCode.Success);
});
