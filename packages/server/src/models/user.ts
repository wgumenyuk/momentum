import { Schema, model } from "mongoose";

/**
  Nutzer-Schema.
*/
export type UserSchema = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzername.
  */
  username: string;

  /**
    E-Mail.
  */
  email: string;

  /**
    Passwort.
  */
  password: string;

  /**
    Geschlecht.
  */
  gender: "m" | "f";

  /**
    Gewicht.
  */
  weight: number;

  /**
    Erstelldatum des Kontos.
  */
  createdAt: number;

  /**
    Zeitpunkt der letzten Anmeldung.
  */
  loggedInAt: number;
};

/**
  Nutzer-Schema.
*/
const userSchema = new Schema<UserSchema>({
  id: {
    type: "string",
    required: true
  },
  username: {
    type: "string",
    required: true,
    unique: true
  },
  email: {
    type: "string",
    required: true,
    unique: true
  },
  password: {
    type: "string",
    required: true
  },
  gender: {
    type: "string",
    enum: [
      "m",
      "f"
    ],
    required: true
  },
  weight: {
    type: "number",
    required: true
  },
  createdAt: {
    type: "number",
    required: true
  },
  loggedInAt: {
    type: "number",
    required: true
  }
});

/**
  Nutzer-Modell.
*/
export const User = model("User", userSchema);