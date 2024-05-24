import Router from "@koa/router";
import { getExercises } from "../services/exerciseService"; // Adjust path as necessary

export const exerciseRouter = new Router({
  prefix: "/exercises"
});

// Endpoint to fetch all exercises or by muscle group
exerciseRouter.get("/", async (ctx) => {
  await getExercises(ctx);
});
