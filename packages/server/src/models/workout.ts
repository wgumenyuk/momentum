import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

/**
  Übungseintrag im Split.
*/
// TODO Typ aus `Split` beziehen.
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
type Workout = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzer-ID.
  */
  userId: string;

  /**
    Split-ID. 
  */
  splitId: string;

  /**
    Liste von Übungen. 
  */
  exercises: Exercise[];

  /**
    Zeitpunkt des Starts. 
  */
  startedAt: number;

  /**
    Zeitpunkt des Endes. 
  */
  finishedAt: number;
};

const WorkoutSchema = new Schema<Workout>({
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
  splitId: {
    type: "string",
    required: true
  },
  exercises: {
    type: [
      {
        exerciseId: "string",
        sets: "number",
        reps: "number"
      }
    ]
  },
  startedAt: {
    type: "number"
  },
  finishedAt: {
    type: "number"
  }
});

/**
  `Workout`-Modell. 
*/
export const Workout = model<Workout>("Workout", WorkoutSchema);
