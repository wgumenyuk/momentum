import { Schema, model } from "mongoose";

/**
  Ausrüstung.
*/
export type Equipment = {
  /**
    ID.
  */
  id: string;

  /**
    Liste von Übungen, die mit dieser Ausrüstung ausgeführt werden können.
  */
  exercises: string[];
};

const EquipmentSchema = new Schema<Equipment>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  exercises: {
    type: [ String ],
    required: true
  }
});

/**
  `Equipment`-Modell.
*/
export const Equipment = model<Equipment>("Equipment", EquipmentSchema);
