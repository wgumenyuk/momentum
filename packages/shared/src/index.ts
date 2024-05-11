import { z } from "zod";

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
  err: ErrorCodeValue;
});

/**
  Statuscodes.
*/
export const StatusCode = {
  Success: [ 200, "success" ],
  BadRequest: [ 400, "bad_request" ],
  NotFound: [ 404, "not_found" ],
  InternalError: [ 500, "internal_error" ],
  Unauthenticated: [ 401, "unauthenticated" ],
  Forbidden: [ 403, "forbidden" ]
} as const;

/**
  Fehlercodes.
*/
export const ErrorCode = {
  NotFound: "not_found",
  InternalError: "internal_error",
  MalformedJson: "malformed_json",
  RegisterInvalidEmail: "register.invalid_email",
  RegisterInvalidPassword: "register.invalid_password",
  RegisterPasswordTooShort: "register.password_too_short",
  RegisterPasswordTooLong: "register.password_too_long",
  RegisterEmailTaken: "register.email_taken"
} as const;

/**
  Schema für das Registrierungs-Formular.
*/
export const RegisterSchema = z.object({
  /**
    E-Mail.
  */
  email: z
    .string({
      message: ErrorCode.RegisterInvalidEmail
    })
    .email(ErrorCode.RegisterInvalidEmail),

  /**
    Passwort.
  */
  password: z
    .string({
      message: ErrorCode.RegisterInvalidPassword
    })
    .min(12, ErrorCode.RegisterPasswordTooShort)
    .max(32, ErrorCode.RegisterPasswordTooLong)
});
