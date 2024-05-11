import { RegisterSchema, StatusCode, ErrorCode } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { hashPassword } from "$services/crypto";
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
    email,
    password: hash
  });

  await user.save();

  ok(ctx, StatusCode.Success, {
    id: user.id
  });
};
