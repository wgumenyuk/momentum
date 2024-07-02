import Router from "@koa/router";
import { isAuthenticated } from "$api/middleware/auth";
import {
  getCategories,
  getTopicsByCategory,
  getTopicDetail
} from "$services/dictionary";

const dictionaryRouter = new Router({
  prefix: "/dictionary"
});

dictionaryRouter.use(isAuthenticated);

dictionaryRouter.get("/categories", async (ctx) => {
  await getCategories(ctx);
});

dictionaryRouter.get("/topics/:category", async (ctx) => {
  const { category } = ctx.params;
  await getTopicsByCategory(ctx, category);
});

dictionaryRouter.get("/topic/:id", async (ctx) => {
  const { id } = ctx.params;
  await getTopicDetail(ctx, id);
});

export default dictionaryRouter;
