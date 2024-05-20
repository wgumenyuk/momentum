import { nanoid } from "nanoid";

// Intern
import { StatusCode, ErrorCode, ErrorCodeValue, SplitSchema } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { Split } from "$models/split";

// Types
import type { Context } from "koa";

/**
  Erstellt einen neuen Split.
*/
export const createSplit = async (ctx: Context) => {
  const { success, error, data } = SplitSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(ctx, StatusCode.BadRequest, error.issues[0].message as ErrorCodeValue);
  }

  const split = new Split({
    ...data,
    id: nanoid(),
    userId: ctx.params.uid
  });

  await split.save();

  ok(ctx, StatusCode.Success, {
    id: split.id
  });
};

/**
  Ruft einen Split ab. 
*/
export const getSplit = async (ctx: Context) => {
  const { sid } = ctx.params;

  const split = await Split.findOne({
    id: sid
  });

  if(!split) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    split
  });
};

/**
  Ruft alle Splits eines Nutzers ab.
*/
export const getSplits = async (ctx: Context) => {
  const { uid } = ctx.params;

  const splits = await Split.find({
    userId: uid
  });

  ok(ctx, StatusCode.Success, {
    splits
  });
};

/**
  Aktualisiert einen Split.
*/
export const updateSplit = async (ctx: Context) => {
  const { sid } = ctx.params;
  const { success, error, data } = SplitSchema.partial().safeParse(ctx.request.body);

  if(!success) {
    return nok(ctx, StatusCode.BadRequest, error.issues[0].message as ErrorCodeValue);
  }

  const split = await Split.findOneAndUpdate(
    {
      id: sid
    },
    data,
    {
      new: true
    }
  );

  if(!split) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    split
  });
};

/**
  Löscht einen Split. 
*/
export const deleteSplit = async (ctx: Context) => {
  const { sid } = ctx.params;

  const split = await Split.findOneAndDelete({
    id: sid
  });

  if(!split) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    id: split.id
  });
};
