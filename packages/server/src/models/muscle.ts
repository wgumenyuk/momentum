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

  /*
    Liste von Übungen, die diesen Muskel trainieren.
  */
  exercises: string[];
};

const MuscleSchema = new Schema<Muscle>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  region: {
    type: "string",
    required: true
  },
  exercises: {
    type: [ String ],
    required: true
  }
});

/**
  `Muscle`-Modell.
*/
export const Muscle = model<Muscle>("Muscle", MuscleSchema);
