import { Schema, model } from "mongoose";

/**
  Übung.
*/
export type Exercise = {
  /**
    Übung.
  */
  id: string;

  /**
    Betroffene Muskeln.
  */
  muscleGroups: string[];

  /**
    Benötige Ausrüstung.
  */
  equipment: string[];

  /**
    Schwierigkeitsgrad.
  */
  difficulty: "easy" | "intermediate" | "advanced";
};

const ExerciseSchema = new Schema<Exercise>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  muscleGroups: {
    type: [ String ],
    required: true
  },
  equipment: {
    type: [ String ],
    required: true
  },
  difficulty: {
    type: "string",
    required: true,
    enum: [
      "easy",
      "intermediate",
      "advanced"
    ]
  }
});

/**
  `Exercise`-Modell.
*/
export const Exercise = model<Exercise>("Exercise", ExerciseSchema);
