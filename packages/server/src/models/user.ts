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
