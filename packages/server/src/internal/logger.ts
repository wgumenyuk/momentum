import pino from "pino";

// Types
import type { TransportTargetOptions as Targets } from "pino";

const isDev = (process.env.NODE_ENV !== "production");
const targets: Targets[] = [];

// `pino-pretty` im Development-Modus ausführen.
if(isDev) {
  targets.push({
    target: "pino-pretty"
  });
}

/**
  Logger.
*/
export const log = pino({
  level: (isDev) ? "debug" : "info",
  transport: {
    targets
  }  
});