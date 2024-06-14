import { nanoid } from "nanoid";

// Intern
import {
  StatusCode,
  ErrorCode,
  PastWorkoutSchema
} from "@momentum/shared";
import { ok, nok } from "$api/response";
import { PastWorkout } from "$models/past-workout";

// Types
import type { Context } from "koa";
import type { ErrorCodeValue } from "@momentum/shared";

/**
  Erstellt ein neues erledigtes Workout. 
*/
export const createPastWorkout = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { success, error, data } = PastWorkoutSchema.safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const workout = new PastWorkout({
    ...data,
    id: nanoid(),
    userId
  });

  await workout.save();

  ok(ctx, StatusCode.Success, {
    id: workout.id
  });
};

/**
  Ruft ein erledigtes Workout ab. 
*/
export const getPastWorkout = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id } = ctx.params;

  const workout = await PastWorkout.findOne({
    id,
    userId
  }, "-_id -__v");

  if(!workout) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    workout
  });
};

/**
  Ruft alle erledigten Workouts eines Nutzers ab. 
*/
export const getPastWorkouts = async (ctx: Context) => {
  const userId = ctx.state.user.id;

  const workouts = await PastWorkout.find({
    userId
  }, "-_id -__v");

  ok(ctx, StatusCode.Success, {
    workouts
  });
};

/**
  Aktualisiert ein erledigtes Workout.
*/
export const updatePastWorkout = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id } = ctx.params;
  
  const { success, error, data } = PastWorkoutSchema
    .partial()
    .safeParse(ctx.request.body);

  if(!success) {
    return nok(
      ctx,
      StatusCode.BadRequest,
      error.issues[0].message as ErrorCodeValue
    );
  }

  const workout = await PastWorkout.findOneAndUpdate(
    {
      id,
      userId
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
  Löscht ein erledigtes Workout.
*/
export const deletePastWorkout = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id } = ctx.params;

  const workout = await PastWorkout.findOneAndDelete({
    id,
    userId
  });

  if(!workout) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    id: workout.id
  });
};
