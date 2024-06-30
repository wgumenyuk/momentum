// $services/exercises.js

import { StatusCode } from "@momentum/shared";
import { ok } from "$api/response";
import { Exercise } from "$models/exercise";

// Types
import type { Context } from "koa";

/**
  Ruft alle Übungen ab.
*/
export const getExercises = async (ctx: Context) => {
  const exercises = await Exercise.find({}, "-_id -__v", {
    lean: true
  });

  ok(ctx, StatusCode.Success, {
    exercises
  });
};
