import { HttpError } from "koa";

// Intern
import { StatusCode, ErrorCode } from "@momentum/shared";
import { log } from "$internal/logger";
import { nok } from "$api/response";

// Types
import type { Middleware } from "koa";

/**
  Verarbeitet aufgetretene Fehler.
*/
export const handleError: Middleware = async (ctx, next) => {
  try {
    await next();
    const status = ctx.status || 404;
    
    if(status === 404) {
      ctx.throw(404);
    } 
  } catch(err) {
    const status = (err instanceof HttpError) ? err.status : 500;
    
    // Fehlerhafte JSON.
    if(status === 400) {
      nok(ctx, StatusCode.BadRequest, ErrorCode.MalformedJson);
      return;
    }

    // Not Found.
    if(status === 404) {
      nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
      return;
    }

    // Interner Fehler.
    log.error(err, `${ctx.method} ${ctx.path} ${ctx.ip}`);
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};
