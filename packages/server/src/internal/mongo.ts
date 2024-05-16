import mongoose from "mongoose";

// Intern
import { log } from "$internal/logger";

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

  log.info("connected to MongoDB");
};
