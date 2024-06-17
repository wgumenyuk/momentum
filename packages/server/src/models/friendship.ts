import { Schema, model } from "mongoose";

// Types
import type { Friendship as FriendshipType } from "@momentum/shared";

const FriendshipSchema = new Schema<FriendshipType>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  userId1: {
    type: "string",
    required: true
  },
  userId2: {
    type: "string",
    required: true
  },
  isConfirmed: {
    type: "boolean",
    required: true,
    default: false
  },
  confirmedAt: "date",
  createdAt: {
    type: "date",
    required: true,
    default: new Date()
  }
});

/**
  `Friendship`-Modell.
*/
export const Friendship = model<FriendshipType>("Friendship", FriendshipSchema);
