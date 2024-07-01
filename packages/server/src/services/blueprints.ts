import { nanoid } from "nanoid";

// Intern
import {
  StatusCode,
  ErrorCode,
  BlueprintSchema
} from "@momentum/shared";
import { ok, nok } from "$api/response";
import { Blueprint } from "$models/blueprints";

// Types
import type { Context } from "koa";
import type { ErrorCodeValue } from "@momentum/shared";

/**
  Erstellt eine neue Blueprint.
*/
export const createBlueprint = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { success, error, data } = BlueprintSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const blueprint = new Blueprint({
    ...data,
    id: nanoid(),
    userId
  });

  await blueprint.save();

  ok(ctx, StatusCode.Success, {
    id: blueprint.id
  });
};

/**
  Ruft eine Blueprint ab.
*/
export const getBlueprint = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id } = ctx.params;

  const blueprint = await Blueprint.findOne({
    id,
    userId
  }, "-_id -__v");

  if(!blueprint) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    blueprint
  });
};

/**
  Ruft alle Blueprints eines Nutzers ab.
*/
export const getBlueprints = async (ctx: Context) => {
  const userId = ctx.state.user.id;

  const blueprints = await Blueprint.find({
    userId
  }, "-_id -__v");

  ok(ctx, StatusCode.Success, {
    blueprints
  });
};

/**
  Aktualisiert eine Blueprint.
*/
export const updateBlueprint = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id } = ctx.params;

  const { success, error, data } = BlueprintSchema
    .partial()
    .safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const blueprint = await Blueprint.findOneAndUpdate(
    {
      id,
      userId
    },
    data,
    {
      new: true
    }
  );

  if(!blueprint) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    id: blueprint.id
  });
};

/**
  Löscht eine Blueprint.
*/
export const deleteBlueprint = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id } = ctx.params;

  const blueprint = await Blueprint.findOneAndDelete({
    id,
    userId
  });

  if(!blueprint) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    id: blueprint.id
  });
};
