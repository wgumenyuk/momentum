import { Redis } from "ioredis";

const { REDIS_URL } = process.env;

/**
  Redis-Client.
*/
export const redis = new Redis(REDIS_URL, {
  lazyConnect: true
});

/**
  Stellt eine Verbindung zu Redis her,
*/
export const initRedis = async () => {
  // TODO: Logging.
  await redis.connect();
};
