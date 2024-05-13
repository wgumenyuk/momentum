import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

/**
  Übungseintrag im Split.
*/
type Exercise = {
  /**
    Übungs-ID.
  */
  exerciseId: string;

  /**
    Anzahl der Sätze. 
  */
  sets: number;

  /**
    Anzahl der Wiederholdungen. 
  */
  reps: number;
};

/**
  Split. 
*/
type Split = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzer-ID.
  */
  userId: string;

  /**
    Name. 
  */
  name: string;

  /**
    Beschreibung. 
  */
  description: string;

  /**
    Liste von Übungen. 
  */
  exercises: Exercise[];
};

const SplitSchema = new Schema<Split>({
  id: {
    type: "string",
    required: true,
    unique: true,
    default: nanoid()
  },
  userId: {
    type: "string",
    required: true
  },
  name: {
    type: "string",
    required: true
  },
  description: {
    type: "string"
  },
  exercises: {
    type: [
      {
        exerciseId: "string",
        sets: "number",
        reps: "number"
      }
    ]
  }
});

/**
  `Split`-Modell. 
*/
export const Split = model<Split>("Split", SplitSchema);
