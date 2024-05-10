import { Redis } from "ioredis";

// Intern
import { log } from "$internal/logger";

const { REDIS_URL } = process.env;

/**
  Redis-Client.
*/
export const redis = new Redis(REDIS_URL, {
  lazyConnect: true,
  reconnectOnError: () => {
    return false;
  }
});

/**
  Stellt eine Verbindung zu Redis her.
*/
export const initRedis = async () => {
  log.info("connecting to Redis");

  redis.on("error", (err) => {
    log.error(err, "Redis generated an error");
  });

  try {
    await redis.connect();
  } catch(err) {
    log.fatal(err, "failed to connect to Redis");
    process.exit(1);
  }

  log.info("connected to Redis");
};
