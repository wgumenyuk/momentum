import { nanoid } from "nanoid";

// Intern
import {
  StatusCode,
  ErrorCode,
  SplitSchema
} from "@momentum/shared";
import { ok, nok } from "$api/response";
import { Workout } from "$models/workout";

// Types
import type { Context } from "koa";
import type { ErrorCodeValue } from "@momentum/shared";

/**
  Erstellt einen neues Workout.
*/
export const createWorkout = async (ctx: Context) => {
  const { success, error, data } = SplitSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const workout = new Workout({
    ...data,
    id: nanoid(),
    userId: ctx.params.uid
  });

  await workout.save();

  ok(ctx, StatusCode.Success, {
    id: workout.id
  });
};

/**
  Ruft ein Workout ab. 
*/
export const getWorkout = async (ctx: Context) => {
  const { wid } = ctx.params;

  const workout = await Workout.findOne({
    id: wid
  }, "-_id -__v");

  if(!workout) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    workout
  });
};

/**
  Ruft alle Workouts eines Nutzers ab.
*/
export const getWorkouts = async (ctx: Context) => {
  const { uid } = ctx.params;

  const workouts = await Workout.find({
    userId: uid
  }, "-_id -__v");

  ok(ctx, StatusCode.Success, {
    workouts
  });
};

/**
  Aktualisiert ein Workout.
*/
export const updateWorkout = async (ctx: Context) => {
  const { sid } = ctx.params;

  const { success, error, data } = SplitSchema
    .partial()
    .safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const workout = await Workout.findOneAndUpdate(
    {
      id: sid
    },
    data,
    {
      new: true
    }
  );

  if(!workout) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    id: workout.id
  });
};

/**
  Löscht ein Workout. 
*/
export const deleteWorkout = async (ctx: Context) => {
  const { sid } = ctx.params;

  const workout = await Workout.findOneAndDelete({
    id: sid
  });

  if(!workout) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    id: workout.id
  });
};
