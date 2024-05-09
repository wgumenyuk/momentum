import { log } from "$internal/logger";

// Types
import type { Middleware } from "koa";

/**
  Logged die Anfrage.
*/
export const logRequest: Middleware = (ctx, next) => {
  log.info(`${ctx.method} ${ctx.path} ${ctx.ip}`);
  return next();
};
