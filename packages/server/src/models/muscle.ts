import { Schema, model } from "mongoose";

/**
  Muskel.
*/
export type Muscle = {
  /**
    ID.
  */
  id: string;
  
  /**
    Muskelgruppe, die die einzeln genannten Muskeln beinhaltet.
  */
  muscleGroup: string;

  /**
    Region im Körper.
  */
  region: string;

  /**
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
  muscleGroup: {
    type: "string",
    required: true
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
