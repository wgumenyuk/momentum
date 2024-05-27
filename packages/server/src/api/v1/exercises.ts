import Router from "@koa/router";

// Intern
import { getExercises } from "$services/exercises";

export const exerciseRouter = new Router({
  prefix: "/exercises"
});

exerciseRouter.get("/", async (ctx) => {
  await getExercises(ctx);
});
