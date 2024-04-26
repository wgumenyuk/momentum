export namespace Momentum {
  /**
    API-Antwort.
  */
  export type Response<
    T extends Record<string, any> = {},
    U extends Record<string, any> = {}
  > = {
    success: true;
    status: number;
    data: T;
  } | {
    success: false;
    status: number;
    details: U;
  };
};