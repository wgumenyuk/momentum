import { nanoid } from "nanoid";

// Intern
import { StatusCode, ErrorCode, EventKind } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { User } from "$models/user";
import { Friendship } from "$models/friendship";
import { Event } from "$models/event";

// Types
import type { Context } from "koa";

/**
  Ruft alle Freundschaften eines Nutzers ab.
*/
export const getFriendships = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const includePending = (ctx.query["include_pending"] === "true");

  const friendships = await Friendship.find(
    {
      $or: [
        {
          userId1: userId
        },
        {
          userId2: userId
        }
      ],
      ...((includePending) ? { isConfirmed: true } : {})
    },
    "-_id, -__v",
    {
      lean: true
    }
  );

  ok(ctx, StatusCode.Success, {
    friendships
  });
};

/**
  Erstellt eine neue Freundschaftsanfrage.
*/
export const createFriendship = async (ctx: Context) => {
  const senderId = ctx.state.user.id;
  const { recipientId } = ctx.request.body; 

  if(!recipientId || senderId === recipientId) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const recipient = await User.findOne({
    id: recipientId
  });

  if(!recipient) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  if(recipient.isPrivate) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const sender = await User.findOne({
    id: senderId
  });

  if(!sender) {
    return;
  }

  const isFriends = !!(
    await Friendship.exists({
      $or: [
        {
          userId1: senderId,
          userId2: recipientId
        },
        {
          userId1: recipientId,
          userId2: senderId
        }
      ]
    })
  ); 

  if(isFriends) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const friendship = await Friendship.create({
    id: nanoid(),
    userId1: senderId,
    userId2: recipientId
  });

  await friendship.save();

  const event = new Event({
    id: nanoid(),
    userId: recipientId,
    kind: EventKind.FriendRequestReceived,
    data: {
      friendshipId: friendship.id,
      senderName: sender.displayName
    },
    createdAt: new Date()
  });

  await event.save();

  ok(ctx, StatusCode.Success, {
    id: friendship.id
  });
};

/**
  Akzeptiert eine Freundschaftsnafrage eines Nutzers.
*/
export const acceptFriendship = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id: friendshipId } = ctx.params;
  const { eventId } = ctx.request.body;

  if(!friendshipId) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const friendship = await Friendship.findOne({
    id: friendshipId,
    isConfirmed: false
  });

  if(!friendship) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const senderId = (userId === friendship.userId1) ?
    friendship.userId2 :
    friendship.userId1;

  const recipient = await User.findOne({
    id: userId
  });

  if(!recipient) {
    return;
  }

  const userExists = !!(
    await User.exists({
      id: senderId
    })
  );

  if(!userExists) {
    await friendship.deleteOne();
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  friendship.isConfirmed = true;
  friendship.confirmedAt = new Date();

  await friendship.save();

  // Benachrichtigung löschen, nachdem die Freundschaftsanfrage akzeptiert wurde.
  await Event.deleteOne({
    id: eventId,
    userId,
    kind: EventKind.FriendRequestReceived
  });

  const event = new Event({
    id: nanoid(),
    userId: senderId,
    kind: EventKind.FriendRequestAccepted,
    data: {
      friendshipId: friendship.id,
      recipientName: recipient.displayName
    },
    createdAt: new Date()
  });

  await event.save();

  ok(ctx, StatusCode.Success);
};

/**
  Lehnt eine Freundschaftsanfrage eines Nutzers ab.
*/
export const declineFriendship = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id: friendshipId } = ctx.params;
  const { eventId } = ctx.request.body;

  const friendship = await Friendship.findOne({
    id: friendshipId,
    isConfirmed: false,
    $or: [
      {
        userId1: userId
      },
      {
        userId2: userId
      }
    ]
  });

  if(!friendship) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  // Benachrichtigung löschen.
  await Event.deleteOne({
    id: eventId,
    userId,
    kind: EventKind.FriendRequestReceived
  });

  await friendship.deleteOne();

  ok(ctx, StatusCode.Success);
};

/**
  Entfernt eine bestehende Freundschaft zwischen zwei Nutzern.
*/
export const deleteFriendship = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id: friendshipId } = ctx.params;

  const friendship = await Friendship.findOne({
    id: friendshipId,
    isConfirmed: true,
    $or: [
      {
        userId1: userId
      },
      {
        userId2: userId
      }
    ]
  });

  if(!friendship) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }
  
  await friendship.deleteOne();

  ok(ctx, StatusCode.Success);
};
