import mongoose from "mongoose";

// Intern
import { log } from "$internal/logger";

/**
  Stellt eine Verbindung zu MongoDB her.
*/
export const loadMongoDb = async function() {
  log.info("connecting to MongoDB");

  const {
    MONGODB_HOST,
    MONGODB_PORT = 27017
  } = process.env;

  const url = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}`;

  try {
    await mongoose.connect(url, {
      dbName: "momentum",
      authSource: "admin"
    });
  } catch(err) {
    log.fatal(err, "failed to connect to MongoDB");
    process.exit(1);
  }

  log.info("connected to MongoDB");
};