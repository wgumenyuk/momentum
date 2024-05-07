import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

/**
  Nutzer.
*/
type User = {
  /**
    ID.
  */
  id: string;

  /**
    E-Mail.
  */
  email: string;

  /**
    Vorname.
  */
  firstName: string;

  /**
    Nachname.
  */
  lastName: string;

  /**
    Passwort-Hash.
  */
  password: string;

  /**
    Erstellungsdatum des Kontos.
  */
  createdAt: number;
};

const UserSchema = new Schema<User>({
  id: {
    type: "string",
    required: true,
    unique: true,
    default: nanoid()
  },
  email: {
    type: "string",
    required: true,
    unique: true
  },
  firstName: {
    type: "string",
    required: true
  },
  lastName: {
    type: "string",
    required: true
  },
  password: {
    type: "string",
    required: true,
    unique: true
  },
  createdAt: {
    type: "number",
    required: true,
    default: Date.now()
  }
});

/**
  `User`-Modell.
*/
export const User = model<User>("User", UserSchema);
