import { StatusCode } from "@momentum/shared";
import { ok } from "$api/response";
import { Exercise } from "$models/exercise";

// Types
import type { Context } from "koa";
import { log } from "$internal/logger";

/**
  Ruft alle Übungen ab.
*/
export const getExercises = async (ctx: Context) => {
  log.debug("get exercise service called on server");
  const exercises = await Exercise.find({}, {}, {
    lean: true
  });

  log.debug(exercises);

  ok(ctx, StatusCode.Success, {
    exercises
  });
};
