import Router from "@koa/router";

// Intern
import { getEvents, getEvent } from "$services/events";

export const eventsRouter = new Router({
  prefix: "/events"
});

eventsRouter.get("/", async (ctx) => {
  await getEvents(ctx);
});

eventsRouter.get("/:id", async (ctx) => {
  await getEvent(ctx);
});
