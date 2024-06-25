import { nanoid } from "nanoid";
import jwt from "jwt-promisify";

// Intern
import { RegisterSchema, StatusCode, ErrorCode, LoginSchema } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { redis } from "$internal/redis";
import { hashPassword, verifyPassword } from "$services/crypto";
import { User } from "$models/user";

// Types
import type { Context } from "koa";
import type { ErrorCodeValue } from "@momentum/shared";

/**
  Registriert ein neues Nutzerkonto.
*/
export const register = async (ctx: Context) => {
  const { success, error, data } = RegisterSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const { email, password } = data;

  const isEmailTaken = !!(
    await User.findOne({
      email
    })
  );

  if(isEmailTaken) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.RegisterEmailTaken);
  }

  const hash = await hashPassword(password);

  const user = await User.create({
    id: nanoid(),
    email,
    password: hash
  });

  await user.save();

  ok(ctx, StatusCode.Success, {
    id: user.id
  });
};

/**
  Authentifiziert einen Benutzer und gibt ein JWT aus.
*/
export const login = async (ctx: Context) => {
  const { success, error, data } = LoginSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const { email, password } = data;

  const user = await User.findOne({
    email
  });

  if(!user) {
    return nok(ctx, StatusCode.Unauthenticated, ErrorCode.LoginInvalidEmail);
  }

  const isPasswordCorrect = await verifyPassword(password, user.password);

  if(!isPasswordCorrect) {
    return nok(ctx, StatusCode.Unauthenticated, ErrorCode.LoginInvalidPassword);
  }

  const token = await jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1w"
    }
  );

  ok(ctx, StatusCode.Success, {
    token: `Bearer ${token}`
  });
};

/**
  Meldet einen Benutzer ab.
*/
export const logout = async (ctx: Context) => {
  const token = ctx.request.headers.authorization?.split(" ")[1];

  if(!token) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.TokenInvalid);
  }

  try {
    const decoded = await jwt.decode(token);

    if(!decoded || !decoded.exp) {
      return nok(ctx, StatusCode.BadRequest, ErrorCode.TokenInvalid);
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const remainingLifetime = decoded.exp - currentTime;

    if(remainingLifetime <= 0) {
      return nok(ctx, StatusCode.BadRequest, ErrorCode.TokenExpired);
    }

    await redis.setex(
      `expired-token:${token}`,
      remainingLifetime,
      remainingLifetime
    );

    return ok(ctx, StatusCode.Success);
  } catch(error) {
    return nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};
