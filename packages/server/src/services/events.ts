import { StatusCode, ErrorCode } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { Event } from "$models/event";

// Types
import type { Context } from "koa";

/**
  Ruft ein Event ab.
*/
export const getEvent = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id: eventId } = ctx.params;

  const event = await Event.findOne({
    id: eventId,
    userId
  }, "-_id -__v", {
    lean: true
  });

  if(!event) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    event
  });
};

/**
  Ruft alle Events eines Nutzers ab.
*/
export const getEvents = async (ctx: Context) => {
  const userId = ctx.state.user.id;

  const events = await Event.find({
    userId
  }, "-_id -__v", {
    lean: true
  });

  if(!events || events.length === 0) {
    return nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
  }

  ok(ctx, StatusCode.Success, {
    events
  });

};
