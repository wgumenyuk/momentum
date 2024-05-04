import pino from "pino";

const isDev = (process.env.NODE_ENV !== "production");

/**
  Logger.
*/
export const log = pino({
  level: (isDev) ? "debug" : "info",
  transport: {
    target: (isDev) ? "pino-pretty" : "pino/file"
  }
});
