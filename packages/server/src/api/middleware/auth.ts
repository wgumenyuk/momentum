import jwt from "jwt-promisify";

// Intern
import { StatusCode, ErrorCode } from "@momentum/shared";
import { nok } from "$api/response";
import { redis } from "$internal/redis";

// Types
import type { Middleware } from "koa";

const { JWT_SECRET } = process.env;

/**
  Überprüft, ob der Nutzer angemeldet ist.
*/
export const isAuthenticated: Middleware = async (ctx, next) => {
  try {
    const [ schema, token ] = ctx.get("Authorization").split(" ");

    if(schema !== "Bearer" || !token) {
      ctx.throw(401);
    }

    const isExpired = !!(await redis.get(`expired-token:${token}`));

    if(isExpired) {
      ctx.throw(401);
    }

    ctx.state.user = await jwt.verify(token, JWT_SECRET);
  } catch(err) {
    return nok(ctx, StatusCode.Unauthenticated, ErrorCode.Unauthenticated);
  }

  return next();
};

/**
  Überprüft, ob der Nutzer abgemeldet ist.
*/
export const isUnauthenticated: Middleware = (ctx, next) => {
  if(ctx.get("Authorization")) {
    return nok(ctx, StatusCode.Forbidden, ErrorCode.Forbidden);
  }

  return next();
};
