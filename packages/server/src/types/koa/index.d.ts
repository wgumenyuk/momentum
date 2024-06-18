import type { JwtPayload } from "@momentum/shared";

declare module "koa" {
  interface DefaultState {
    /**
      Angemeldeter Nutzer.
    */
    user: JwtPayload;
  }
}

export {};
