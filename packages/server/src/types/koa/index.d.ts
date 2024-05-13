declare module "koa" {
  interface DefaultState {
    /**
      Angemeldeter Nutzer.
    */
    user: {
      /**
        ID.
      */
      id: string;
    };
  }
}

export {};
