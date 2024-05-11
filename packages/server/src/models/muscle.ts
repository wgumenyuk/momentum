import { Schema, model } from "mongoose";

/**
  Muskel.
*/
type Muscle = {
  /**
    ID.
  */
  id: string;

  /**
    Region im Körper.
  */
  region: string;
};

const MuscleSchema = new Schema({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  region: {
    type: "string",
    required: true
  }
});

/**
  `Muscle`-Modell.
*/
export const Muscle = model<Muscle>("Muscle", MuscleSchema);
