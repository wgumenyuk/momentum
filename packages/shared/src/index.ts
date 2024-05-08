/**
  API-Antwortcode.
*/
export enum ResponseCode {
  InternalError,
  InvalidData,
  NotFound,
  Success
};

/**
  Leeres Objekt.
*/
export type Empty = Record<string, never>;

/**
  API-Antwort.
*/
export type Response<
  Data extends Record<string, unknown> = Empty,
  Error extends Record<string, unknown> = Empty
> = {
  /**
    Ob die Anfrage erfolgreich war.
  */
  success: true;

  /**
    HTTP-Status.
  */
  status: number;

  /**
    API-Antwortcode.
  */
  code: ResponseCode;

  /**
    Mitgelieferte Daten.
  */
  data: Data;
} | {
  /**
    Ob die Anfrage erfolgreich war.
  */
  success: false;

  /**
    HTTP-Status.
  */
  status: number;

  /**
    API-Antwortcode.
  */
  code: ResponseCode;

  /**
    Mitgelieferte Details über den Fehler.
  */
  details: Error;
};
