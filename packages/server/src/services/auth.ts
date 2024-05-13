import { RegisterSchema, StatusCode, ErrorCode, LoginSchema } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { hashPassword, verifyPassword } from "$services/crypto";
import { User } from "$models/user";
import jwt from "jwt-promisify";

// Types
import type { Context } from "koa";
import type { ErrorCodeValue } from "@momentum/shared";

/**
  Registriert ein neues Nutzerkonto.
*/
export const register = async (ctx: Context) => {
  const { success, error, data } = RegisterSchema.safeParse(ctx.request.body);

  if (!success) {
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

  if (isEmailTaken) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.RegisterEmailTaken);
  }

  const hash = await hashPassword(password);

  const user = await User.create({
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

  if (!success) {
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

  if (!user) {
    return nok(ctx, StatusCode.Unauthenticated, ErrorCode.LoginInvalidEmail);
  }

  const isPasswordCorrect = await verifyPassword(password, user.password);

  if (!isPasswordCorrect) {
    return nok(ctx, StatusCode.Unauthenticated, ErrorCode.LoginInvalidPassword);
  }

  // Generate JWT
  const token = await jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET, // Ensure your JWT secret is securely stored and accessed
    { expiresIn: "1h" } // Token expires in one hour
  );

  // Authentication successful, return the token
  ok(ctx, StatusCode.Success, {
    token: token
  });
};