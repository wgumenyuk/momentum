import { Schema, model } from "mongoose";

/**
  Freundschaft zwischen zwei Nutzern.
*/
type Friendship = {
  /**
    ID.
  */
  id: string;

  /**
    ID des ersten Nutzers.
  */
  userId1: string;

  /**
    ID des zweiten Nutzers.
  */
  userId2: string;

  /**
    Ob die Freundschaft bestätigt ist.
  */
  isConfirmed: boolean;

  /**
    Datum, an dem die Freundschaftsanfrage akzeptiert wurde. 
  */
  confirmedAt: Date;

  /**
    Erstelldatum der Freundschaftsanfrage.
  */
  createdAt: Date;
};

const FriendshipSchema = new Schema<Friendship>({
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
export const Friendship = model<Friendship>("Friendship", FriendshipSchema);
