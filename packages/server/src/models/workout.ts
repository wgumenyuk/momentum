import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

/**
  Übungseintrag im Trainingsplan.
*/
export type Exercise = {
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
  Workout. 
*/
export type Workout = {
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
  `Workout`-Modell. 
*/
export const Workout = model<Workout>("Workout", WorkoutSchema);
