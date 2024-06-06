import { Schema, model } from "mongoose";

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
    Anzeigename.
  */
  displayName: string;

  /**
    Gewicht in Kilogramm.
  */
  weight: number;

  /**
    Passwort-Hash.
  */
  password: string;

  /**
    Ob das Nutzerprofil privat ist.
  */
  isPrivate: boolean;

  /**
    Erstellungsdatum des Kontos.
  */
  createdAt: number;
};

const UserSchema = new Schema<User>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  email: {
    type: "string",
    required: true,
    unique: true
  },
  displayName: {
    type: "string"
  },
  weight: {
    type: "number"
  },
  password: {
    type: "string",
    required: true
  },
  isPrivate: {
    type: "boolean",
    required: true,
    default: false
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
