import Router from "@koa/router";
import { isAuthenticated } from "$api/middleware/auth";

// Intern
import {
  createBlueprint,
  getBlueprint,
  getBlueprints,
  updateBlueprint,
  deleteBlueprint
} from "$services/blueprints";

export const blueprintRouter = new Router({
  prefix: "/blueprints"
});

blueprintRouter.use(isAuthenticated);

blueprintRouter.post("/", async (ctx) => {
  await createBlueprint(ctx);
});

blueprintRouter.get("/:id", async (ctx) => {
  await getBlueprint(ctx);
});

blueprintRouter.get("/", async (ctx) => {
  await getBlueprints(ctx);
});

blueprintRouter.put("/:id", async (ctx) => {
  await updateBlueprint(ctx);
});

blueprintRouter.delete("/:id", async (ctx) => {
  await deleteBlueprint(ctx);
});
