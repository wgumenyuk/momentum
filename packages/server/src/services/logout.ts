import { redis } from "$internal/redis";
import jwt from "jwt-promisify";
import { ok, nok } from "$api/response";
import { StatusCode, ErrorCode } from "@momentum/shared";
import type { Context } from "koa";

/**
 * Logs out a user by blacklisting their JWT.
 * @param ctx Koa context
 */
export const logout = async (ctx: Context) => {
  const token = ctx.request.headers.authorization?.split(" ")[1]; // Assuming token is provided as a Bearer token
  if (!token) {
      return nok(ctx, StatusCode.BadRequest, ErrorCode.TokenInvalid);
  }

  try {
      const decoded = await jwt.decode(token);
      if (!decoded || !decoded.exp) {
          return nok(ctx, StatusCode.BadRequest, ErrorCode.TokenInvalid);
      }

      const currentTime = Math.floor(Date.now() / 1000);
      const remainingLifetime = decoded.exp - currentTime;
      if (remainingLifetime <= 0) {
          return nok(ctx, StatusCode.BadRequest, ErrorCode.TokenExpired);
      }

      await redis.setex(token, remainingLifetime, "blacklisted");
      return ok(ctx, StatusCode.Success);
  } catch (error) {
      return nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};
