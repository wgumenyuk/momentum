import { ErrorCode, StatusCode, DisplayNameSchema } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { User } from "$models/user";

// Types
import type { Context } from "koa";
import type { ErrorCodeValue } from "@momentum/shared";

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
  Aktualisiert den Anzeigenamen eines Nutzers.
*/
export const updateDisplayName = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { success, error, data } = DisplayNameSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const { displayName } = data;

  const user = await User.findOne({
    id: userId
  });

  if(!user) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  user.displayName = displayName;
  await user.save();

  ok(ctx, StatusCode.Success);
};

/**
  Aktualisiert die Privatsphäreeinstellungen.
*/
export const updateProfilePrivacy = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { isPrivate } = (ctx.request.body || {});

  if(typeof isPrivate !== "boolean") {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const user = await User.findOne({
    id: userId
  });

  if(!user) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  user.isPrivate = isPrivate;
  await user.save();

  ok(ctx, StatusCode.Success);
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

/**
  Aktualisiert das Gewicht eines Nutzers.
*/
export const updateWeight = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { weight } = ctx.request.body;

  if(!weight || typeof weight !== "number" || weight < 0 || weight > 300) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const user = await User.findOne({
    id: userId
  });

  if(!user) {
    return nok(ctx, StatusCode.BadRequest, ErrorCode.NotFound);
  }

  user.weight = weight;
  await user.save();

  ok(ctx, StatusCode.Success, { message: "Weight updated successfully." });
};
