import { ErrorCode, StatusCode } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { User } from "$models/user";

// Types
import type { Context } from "koa";

/**
  Ruft Informationen über ein Nutzerprofil ab.
*/
export const getUser = async (ctx: Context) => {
  const { uid } = ctx.params;

  const user = await User.findOne({
    id: uid
  }, "-password -_id -__v");

  if(!user) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    user
  });
};

/**
  Löscht ein Nutzerkonto.
*/
export const deleteUser = async (ctx: Context) => {
  const userId = ctx.state.user.id;

  const userExists = !!(
    await User.exists({
      id: userId
    })
  );

  if(!userExists) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  await User.deleteOne({
    id: userId
  });

  ok(ctx, StatusCode.Success);
};
