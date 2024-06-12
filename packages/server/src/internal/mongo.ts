import mongoose from "mongoose";

// Intern
import { log } from "$internal/logger";
import { seedEquipment } from "$models/seeders/equipment";
import { seedExercises } from "$models/seeders/exercises";
import { seedMuscles } from "$models/seeders/muscle";
import { seedUsers } from "$models/seeders/dev_user";
import { seedWorkouts } from "$models/seeders/dev_workout";

const { MONGODB_URL } = process.env;

/**
  Stellt eine Verbindung zu Mongo her.
*/
export const initMongo = async () => {
  log.info("connecting to MongoDB");

  try {
    await mongoose.connect(MONGODB_URL);
  } catch(err) {
    log.fatal(err, "failed to connect to MongoDB");
    process.exit(1);
  }

  // Seeder ausführen.
  await Promise.all([
    seedEquipment(),
    seedExercises(),
    seedMuscles(),
    seedUsers(),    // Add user seeder here
    seedWorkouts()  // Add workout seeder here
  ]);

  log.info("connected to MongoDB");
};
