import { nanoid } from "nanoid";
import { Context } from "koa";
import { Workout } from "$models/workout";
import { ok, nok } from "$api/response";
import { StatusCode, ErrorCode, ErrorCodeValue, WorkoutSchema } from "@momentum/shared";


// CRUD Service Functions
const createWorkout = async (ctx: Context) => {
  const { success, error, data } = WorkoutSchema.safeParse(ctx.request.body);

  if(!success) {
    const errorMessage = error.issues.map((issue) => issue.message).join(", ");
    return nok(ctx, StatusCode.BadRequest, errorMessage as ErrorCodeValue);
  }

  const newWorkout = new Workout({
    ...data,
    id: nanoid()
  });

  await newWorkout.save();

  ok(ctx, StatusCode.Success, { workout: newWorkout });
};

const getWorkout = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    const workout = await Workout.findOne({ id });
    if(!workout) {
      return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    }
    ok(ctx, StatusCode.Success, { workout });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

const getWorkouts = async (ctx: Context) => {
  const { userId } = ctx.params;

  try {
    const workouts = await Workout.find({ userId });
    ok(ctx, StatusCode.Success, { workouts });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

const updateWorkout = async (ctx: Context) => {
  const { id } = ctx.params;
  const { success, error, data } = WorkoutSchema.partial().safeParse(ctx.request.body);

  if(!success) {
    const errorMessage = error.issues.map((issue) => issue.message).join(", ");
    return nok(ctx, StatusCode.BadRequest, errorMessage as ErrorCodeValue);
  }

  try {
    const workout = await Workout.findOneAndUpdate({ id }, data, { new: true });
    if(!workout) {
      return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    }
    ok(ctx, StatusCode.Success, { workout });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

const deleteWorkout = async (ctx: Context) => {
  const { id } = ctx.params;

  try {
    const workout = await Workout.findOneAndDelete({ id });
    if(!workout) {
      return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    }
    ok(ctx, StatusCode.Success, { workout });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

// Export all functions
export {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
};
