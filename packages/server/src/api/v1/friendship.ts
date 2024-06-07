import Router from "@koa/router";

// Intern
import { isAuthenticated } from "$api/middleware/auth";
import {
  getFriendships,
  createFriendship,
  acceptFriendship,
  declineFriendship,
  deleteFriendship
} from "$services/social";

/**
  Router für Freundschaften zwischen zwei Nutzers.
*/
export const friendshipRouter = new Router({
  prefix: "/friendships"
});

friendshipRouter.use(isAuthenticated);

friendshipRouter.get("/", async (ctx) => {
  await getFriendships(ctx);
});

friendshipRouter.post("/", async (ctx) => {
  await createFriendship(ctx);
});

friendshipRouter.put("/:id/accept", async (ctx) => {
  await acceptFriendship(ctx);
});

friendshipRouter.put("/:id/decline", async (ctx) => {
  await declineFriendship(ctx);
});

friendshipRouter.delete("/:id", async (ctx) => {
  await deleteFriendship(ctx);
});
