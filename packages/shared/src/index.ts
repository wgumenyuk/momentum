type StatusCodeEntries = typeof StatusCode;
type StatusCodeKeys = keyof StatusCodeEntries;

type ErrorCodeEntries = typeof ErrorCode;
type ErrorCodeKeys = keyof ErrorCodeEntries;

/**
  Wert im `StatusCode`-Objekt.
*/
export type StatusCodeValue = StatusCodeEntries[StatusCodeKeys];

/**
  Wert im `ErrorCode`-Objekt.
*/
export type ErrorCodeValue = ErrorCodeEntries[ErrorCodeKeys];

/**
  API-Antwort.
*/
export type Response<T extends Record<string, unknown> = Record<string, never>> = {
  /**
    Statuscode.
  */
  status: StatusCodeValue[1];
} & ({
  /**
    Die Anfrage wurde erfolgreich ausgeführt.
  */
  ok: true;

  /**
    Mitgelieferte Daten.
  */
  data: T;
} | {
  /**
    Die Anfrage wurde nicht erfolgreich ausgeführt.
  */
  ok: false;

  /**
    Fehlercode.
  */
  error: ErrorCodeValue;
});

/**
  Statuscodes.
*/
export const StatusCode = {
  Success: [ 200, "success" ],
  BadRequest: [ 400, "bad_request" ],
  InternalError: [ 500, "internal_error" ]
} as const;

/**
  Fehlercodes.
*/
export const ErrorCode = {
  NotFound: "not_found",
  InternalError: "internal_error"
} as const;
