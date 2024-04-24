import Router from "@koa/router";

/**
  API-Router.
*/
export const router = new Router({
  prefix: "/api/v1"
});

/**
  GET `/status`.
  Zeigt den aktuellen Status an.
*/
router.get("/status", function(ctx) {
  ctx.status = 200;
  ctx.body = {
    success: true,
    status: 200,
    data: {}
  };
});