import Router from "@koa/router";

// Intern
import {
  createSplit,
  getSplit,
  getSplits,
  updateSplit,
  deleteSplit
} from "$services/splits";

export const splitRouter = new Router({
  prefix: "/:uid/splits"
});

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
