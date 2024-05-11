import { Schema, model } from "mongoose";


interface Muscle {
  id: string;

  region: string;
}

const MuscleSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  region: {
    type: String,
    required: true,
    unique: false
  }

});

export const Muscle = model<Muscle>("Muscle", MuscleSchema);
