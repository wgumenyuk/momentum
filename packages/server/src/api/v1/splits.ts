import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import {
  createSplit,
  getSplit,
  getSplits,
  updateSplit,
  deleteSplit
} from "$services/splits";

export const splitRouter = new Router({
  prefix: "/users/:uid/splits"
});

splitRouter.use(isAuthenticated);

splitRouter.post("/", async (ctx) => {
  await createSplit(ctx);
});

splitRouter.get("/:sid", async (ctx) => {
  await getSplit(ctx);
});

splitRouter.get("/", async (ctx) => {
  await getSplits(ctx);
});

splitRouter.put("/:sid", async (ctx) => {
  await updateSplit(ctx);
});

splitRouter.delete("/:sid", async (ctx) => {
  await deleteSplit(ctx);
});
