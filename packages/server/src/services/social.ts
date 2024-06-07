import { nanoid } from "nanoid";

// Intern
import { StatusCode, ErrorCode } from "@momentum/shared";
import { ok, nok } from "$api/response";
import { Friendship } from "$models/friendship";

// Types
import type { Context } from "koa";

/**
  Ruft alle Freundschaften eines Nutzers ab.
*/
export const getFriendships = async (
  ctx: Context,
  userId: string,
  includePending: boolean = false
) => {
  const friendships = await Friendship.find(
    {
      $or: [
        {
          senderId: userId
        },
        {
          recipientId: userId
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
export const createFriendship = async (
  ctx: Context,
  senderId: string, 
  recipientId: string
) => {
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
export const acceptFriendship = async (
  ctx: Context,
  userId: string,
  senderId: string
) => {
  const friendship = await Friendship.findOne({
    // `userId1` ist immer der Sender, und `userId2` der Empfänger.
    userId1: senderId,
    userId2: userId,
    isConfirmed: false
  });

  if(!friendship) {
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
export const declineFriendship = async (
  ctx: Context,
  userId: string,
  senderId: string
) => {
  const friendship = await Friendship.findOne({
    // `userId1` ist immer der Sender, und `userId2` der Empfänger.
    userId1: senderId,
    userId2: userId,
    isConfirmed: false
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
export const deleteFriendship = async (
  ctx: Context,
  userId: string,
  friendId: string
) => {
  const friendship = await Friendship.findOne({
    $or: [
      {
        userId1: userId,
        userId2: friendId
      },
      {
        userId1: friendId,
        userId2: userId
      }
    ],
    isConfirmed: true
  });

  if(!friendship) {
    // TODO: Passenden Fehlercode zurücksenden.
    return nok(ctx, StatusCode.BadRequest, ErrorCode.InternalError);
  }
  
  await friendship.deleteOne();

  ok(ctx, StatusCode.Success);
};
