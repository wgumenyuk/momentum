import Router from "@koa/router";

// Intern
import { StatusCode } from "@momentum/shared";
import { ok } from "$api/response";

/**
  Router.
*/
export const router = new Router({
  prefix: "/api/v1"
});

router.get("/status", (ctx) => {
  ok(ctx, StatusCode.Success);
});
