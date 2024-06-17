import { nanoid } from "nanoid";

// Intern
import { StatusCode, ErrorCode } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { User } from "$models/user";
import { Friendship } from "$models/friendship";

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
  const { recipientId } = ctx.req.body; 

  if(!recipientId) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }

  const userExists = !!(
    await User.exists({
      id: recipientId
    })
  );

  if(!userExists) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
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

  // TODO Benachrichtigung an Sender schicken.

  ok(ctx, StatusCode.Success);
};

/**
  Lehnt eine Freundschaftsanfrage eines Nutzers ab.
*/
export const declineFriendship = async (ctx: Context) => {
  const userId = ctx.state.user.id;
  const { id: friendshipId } = ctx.params;

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
