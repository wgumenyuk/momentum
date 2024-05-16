import { z } from "zod";

type StatusCodeEntries = typeof StatusCode;
type StatusCodeKeys = keyof StatusCodeEntries;

type ErrorCodeEntries = typeof ErrorCode;
type ErrorCodeKeys = keyof ErrorCodeEntries;

/**
 * Wert im `StatusCode`-Objekt.
 */
export type StatusCodeValue = StatusCodeEntries[StatusCodeKeys];

/**
 * Wert im `ErrorCode`-Objekt.
 */
export type ErrorCodeValue = ErrorCodeEntries[ErrorCodeKeys];

/**
 * API-Antwort.
 */
export type Response<T extends Record<string, unknown> = Record<string, never>> = {
  /**
   * Statuscode.
   */
  status: StatusCodeValue[1];
} & ({
  /**
   * Die Anfrage wurde erfolgreich ausgeführt.
   */
  ok: true;

  /**
   * Mitgelieferte Daten.
   */
  data: T;
} | {
  /**
   * Die Anfrage wurde nicht erfolgreich ausgeführt.
   */
  ok: false;

  /**
   * Fehlercode.
   */
  err: ErrorCodeValue;
});

/**
 * Statuscodes.
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
 * Fehlercodes.
 */
export const ErrorCode = {
  NotFound: "not_found",
  InternalError: "internal_error",
  Unauthenticated: "unauthenticated",
  Forbidden: "forbidden",
  MalformedJson: "malformed_json",
  RegisterInvalidEmail: "register.invalid_email",
  RegisterInvalidPassword: "register.invalid_password",
  RegisterPasswordTooShort: "register.password_too_short",
  RegisterPasswordTooLong: "register.password_too_long",
  RegisterEmailTaken: "register.email_taken",
  LoginInvalidEmail: "login.invalid_email",
  LoginInvalidPassword: "login.invalid_password",
  TokenInvalid: "token.invalid",
  TokenAlreadyBlacklisted: "token.already_blacklisted",
  TokenExpired: "token.expired"
} as const;

/**
 * Schema für das Registrierungs-Formular.
 */
export const RegisterSchema = z.object({
  /**
   * E-Mail.
   */
  email: z
    .string({
      message: ErrorCode.RegisterInvalidEmail
    })
    .email({
      message: ErrorCode.RegisterInvalidEmail
    }),

  /**
   * Passwort.
   */
  password: z
    .string({
      message: ErrorCode.RegisterInvalidPassword
    })
    .min(12, ErrorCode.RegisterPasswordTooShort)
    .max(32, ErrorCode.RegisterPasswordTooLong)
});

/**
 * Schema für das Login-Formular.
 */
export const LoginSchema = z.object({
  /**
   * E-Mail.
   */
  email: z
    .string({
      message: ErrorCode.LoginInvalidEmail
    })
    .email({
      message: ErrorCode.LoginInvalidEmail
    }),

  /**
   * Passwort.
   */
  password: z
    .string({
      message: ErrorCode.LoginInvalidPassword
    })
});

/**
  Schema für eine Übung.
*/
export const ExerciseSchema = z.object({
  /**
    ID.
  */
  id: z.string(),

  /**
    Name.
  */
  name: z.string(),

  /**
    Anzahl der Wiederholdungen.
  */
  repetitions: z.number().int().positive(),

  /**
    Anzahl der Sätze.
  */
  sets: z.number().int().positive(),

  /**
    Verwendendes Gewicht.
  */
  weight: z.number().nonnegative().optional(),

  /**
    Dauer.
  */
  duration: z.number().nonnegative().optional(),

  /**
    Liste von beanspruchten Muskelgruppen.
  */
  muscleGroups: z.array(z.string()),

  /**
    Gerätinstellungen.
  */
  deviceSetting: z.string().optional(),

  /**
    Notiz.
  */
  note: z.string().optional()
});

/**
  Schema für ein Workout.
*/
export const WorkoutSchema = z.object({
  /**
    ID.
  */
  id: z.string(),

  /**
    Datum.
  */
  date: z.string(),

  /**
    Übungen.
  */
  exercises: z.array(ExerciseSchema)
});

/**
  Schema für einen Split.
*/
export const SplitSchema = z.object({
  /**
    ID.
  */
  id: z.string(),

  /**
    Name.
  */
  name: z.string(),

  /**
    Workouts.
  */
  workouts: z.array(z.object({
    type: z.enum([
      "Push", 
      "Pull", 
      "Legs", 
      "Upper Body", 
      "Lower Body", 
      "Full Body", 
      "Cardio", 
      "Rest",
      "Arms",
      "Chest and Back",
      "Shoulders and Arms",
      "Chest",
      "Back",
      "Shoulders"
    ]),
    workout: WorkoutSchema
  }))
});
