import Router from "@koa/router";

// Intern
import { ResponseCode, Empty } from "@momentum/shared";

// Types
import type { Response } from "@momentum/shared";

/**
  Router.
*/
export const router = new Router({
  prefix: "/api/v1"
});

router.get("/status", (ctx) => {
  ctx.status = 200;
  ctx.body = {
    success: true,
    status: 200,
    code: ResponseCode.Success,
    data: {}
  } satisfies Response<Empty, Empty>;
});
