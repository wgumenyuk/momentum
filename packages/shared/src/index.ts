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
  TokenExpired: "token.expired",
  WorkoutInvalidName: "workout.invalid_name",
  WorkoutNameTooShort: "workout.name_too_short",
  WorkoutNameTooLong: "workout.name_too_long",
  WorkoutInvalidDescription: "workout.invalid_description",
  WorkoutDescriptionTooLong: "workout.description_too_long",
  InvalidNumber: "invalid_number",
  InvalidDate: "invalid_date"
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
    .email({
      message: ErrorCode.RegisterInvalidEmail
    }),

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

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

/**
  Schema für das Login-Formular.
*/
export const LoginSchema = z.object({
  /**
    E-Mail.
  */
  email: z
    .string({
      message: ErrorCode.LoginInvalidEmail
    })
    .email({
      message: ErrorCode.LoginInvalidEmail
    }),

  /**
    Passwort.
  */
  password: z
    .string({
      message: ErrorCode.LoginInvalidPassword
    })
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

/**
  Schema für einen Trainingsplan.
*/
export const WorkoutSchema = z.object({
  /**
    Name.
  */
  name: z
    .string({
      message: ErrorCode.WorkoutInvalidName
    })
    .min(1, {
      message: ErrorCode.WorkoutNameTooShort
    })
    .max(64, {
      message: ErrorCode.WorkoutNameTooLong
    }),

  /**
    Beschreibung.
  */
  description: z
    .string({
      message: ErrorCode.WorkoutInvalidDescription
    })
    .max(256, {
      message: ErrorCode.WorkoutDescriptionTooLong
    })
    .optional(),

  /**
    Liste von Übungen.
  */
  exercises: z.array(
    z.object({
      exerciseId: z.string(),
      sets: z
        .number({
          message: ErrorCode.InvalidNumber
        })
        .positive({
          message: ErrorCode.InvalidNumber
        }),
      reps: z
        .number({
          message: ErrorCode.InvalidNumber
        })
        .positive({
          message: ErrorCode.InvalidNumber
        })
    })
  )
});

export type WorkoutSchemaType = z.infer<typeof WorkoutSchema>;

/**
  Schema für erledigte Workouts.
*/
export const PastWorkoutSchema = WorkoutSchema.extend({
  /**
    Zeitpunkt des Starts.
  */
  startedAt: z.date({
    message: ErrorCode.InvalidDate
  }),

  /**
    Zeitpunkt des Endes.
  */
  finishedAt: z.date({
    message: ErrorCode.InvalidDate
  })
});

export type PastWorkoutSchemaType = z.infer<typeof PastWorkoutSchema>;

/**
  Übung.
*/
export type Exercise = {
  /**
    ID.
  */
  id: string;

  /**
    Betroffene Muskeln.
  */
  muscleGroups: string[];

  /**
    Benötige Ausrüstung.
  */
  equipment: string[];

  /**
    Schwierigkeitsgrad.
  */
  difficulty: "easy" | "intermediate" | "advanced";
};

/**
  Übungseintrag im Trainingsplan.
*/
export type ExerciseEntry = {
  /**
    Übungs-ID.
  */
  exerciseId: string;

  /**
    Anzahl der Sätze. 
  */
  sets: number;

  /**
    Anzahl der Wiederholdungen. 
  */
  reps: number;
};

/**
  Erledigtes Workout. 
*/
export type PastWorkout = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzer-ID.
  */
  userId: string;

  /**
   trainingsplan  
   */

  workoutId: string;

  /**
    Liste von Übungen. 
  */
  exercises: ExerciseEntry[];

  /**
    Zeitpunkt des Starts. 
  */
  startedAt: number;

  /**
    Zeitpunkt des Endes. 
  */
  finishedAt: number;
};

/**
  Workout. 
*/
export type Workout = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzer-ID.
  */
  userId: string;

  /**
    Name. 
  */
  name: string;

  /**
    Beschreibung. 
  */
  description: string;

  /**
    Liste von Übungen. 
  */
  exercises: ExerciseEntry[];
};

/**
  Freundschaft zwischen zwei Nutzern.
*/
export type Friendship = {
  /**
    ID.
  */
  id: string;

  /**
    ID des ersten Nutzers.
  */
  userId1: string;

  /**
    ID des zweiten Nutzers.
  */
  userId2: string;

  /**
    Ob die Freundschaft bestätigt ist.
  */
  isConfirmed: boolean;

  /**
    Datum, an dem die Freundschaftsanfrage akzeptiert wurde. 
  */
  confirmedAt: Date;

  /**
    Erstelldatum der Freundschaftsanfrage.
  */
  createdAt: Date;
};

export const MacroNutrientInfoSchema = z.object({
  carbohydrates: z.number(),
  protein: z.number(),
  fat: z.number(),
  calories: z.number()
});

export type MacroNutrientInfoType = z.infer<typeof MacroNutrientInfoSchema>;

export const MicroNutrientVitaminInfoSchema = z.object({
  VitaminA: z.number(),
  VitaminBThiamine: z.number(),
  VitaminBRiboflavine: z.number(),
  VitaminBNiacin: z.number(),
  VitaminBPantothenicAcid: z.number(),
  VitaminBBiotin: z.number(),
  VitaminB6: z.number(),
  VitaminB12: z.number(),
  VitaminBFolate: z.number(),
  VitaminC: z.number(),
  VitaminD: z.number(),
  VitaminE: z.number(),
  VitaminK: z.number()
});

export type MicroNutrientVitaminInfoType = z.infer<typeof MicroNutrientVitaminInfoSchema>;

export const MicroNutrientMineralInfoSchema = z.object({
  Calcium: z.number(),
  Chloride: z.number(),
  Chromium: z.number(),
  Copper: z.number(),
  Fluoride: z.number(),
  Iodine: z.number(),
  Iron: z.number(),
  Magnesium: z.number(),
  Manganese: z.number(),
  Molybdenum: z.number(),
  Phosphorus: z.number(),
  Potassium: z.number(),
  Selenium: z.number(),
  Sodium: z.number(),
  Zinc: z.number()
});

export type MicroNutrientMineralInfoType = z.infer<typeof MicroNutrientMineralInfoSchema>;

export const FoodItemSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  brand: z.string().optional(),
  universalProductCode: z.string().optional(),
  macroNutrients: MacroNutrientInfoSchema,
  vitamins: MicroNutrientVitaminInfoSchema,
  minerals: MicroNutrientMineralInfoSchema,
  servingSize: z.number(),
  servingUnit: z.string()
});

export type FoodItemType = z.infer<typeof FoodItemSchema>;

/**
  Art des Events.
*/
export const EventKind = {
  FriendRequestReceived: "friend_request.received",
  FriendRequestAccepted: "friend_request.accepted"
};

/**
  Event.
*/
export type Event = {
  /**
    ID.
  */
  id: string;

  /**
    Nutzer-ID.
  */
  userId: string;

  /**
    Art des Events.
  */
  kind: typeof EventKind[keyof typeof EventKind];

  /**
    Zugehörige Daten.
  */
  data: Record<string, string | number>;

  /**
    Erstelldatum des Events.
  */
  createdAt: Date;
};
