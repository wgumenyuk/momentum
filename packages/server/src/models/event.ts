import { Schema, SchemaTypes, model } from "mongoose";

// Intern
import { EventKind } from "@momentum/shared";

// Types
import type { Event as EventType } from "@momentum/shared";

const EventSchema = new Schema<EventType>({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  userId: {
    type: "string",
    required: true
  },
  kind: {
    type: "string",
    enum: Object.values(EventKind),
    required: true
  },
  data: {
    type: SchemaTypes.Mixed,
    required: true
  },
  createdAt: {
    type: "date",
    required: true
  }
});

/**
  `Event`-Modell.
*/
export const Event = model<EventType>("Event", EventSchema);
