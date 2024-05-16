import { nanoid } from "nanoid";
import { Context } from "koa";
import { Split } from "$models/split";
import { ok, nok } from "$api/response";
import { StatusCode, ErrorCode, ErrorCodeValue, SplitSchema } from "@momentum/shared";

// CRUD Service Functions

// Create a new split
const createSplit = async (ctx: Context) => {
  const { success, error, data } = SplitSchema.safeParse(ctx.request.body);

  if(!success) {
    const errorMessage = error.issues.map((issue) => issue.message).join(", ");
    return nok(ctx, StatusCode.BadRequest, errorMessage as ErrorCodeValue);
  }

  const newSplit = new Split({
    ...data,
    id: nanoid()
  });

  await newSplit.save();

  ok(ctx, StatusCode.Success, { split: newSplit });
};

// Get a specific split by ID
const getSplit = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    const split = await Split.findOne({ id });
    if(!split) {
      return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    }
    ok(ctx, StatusCode.Success, { split });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

// Get all splits for a specific user
const getSplits = async (ctx: Context) => {
  const { userId } = ctx.params;

  try {
    const splits = await Split.find({ userId });
    ok(ctx, StatusCode.Success, { splits });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

// Update a specific split by ID
const updateSplit = async (ctx: Context) => {
  const { id } = ctx.params;
  const { success, error, data } = SplitSchema.partial().safeParse(ctx.request.body);

  if(!success) {
    const errorMessage = error.issues.map((issue) => issue.message).join(", ");
    return nok(ctx, StatusCode.BadRequest, errorMessage as ErrorCodeValue);
  }

  try {
    const split = await Split.findOneAndUpdate({ id }, data, { new: true });
    if(!split) {
      return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    }
    ok(ctx, StatusCode.Success, { split });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

// Delete a specific split by ID
const deleteSplit = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    const split = await Split.findOneAndDelete({ id });
    if(!split) {
      return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    }
    ok(ctx, StatusCode.Success, { split });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

// Export all functions
export {
  createSplit,
  getSplit,
  getSplits,
  updateSplit,
  deleteSplit
};
