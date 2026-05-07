import { z } from "zod";

// Event Type Enum
export type EventType = "character_conversation" | "player_activity";

// Priority
export interface Priority {
  value: "mandatory" | "optional";
  index: number; // 0-9999
}

// Condition Types
export interface LocationCondition {
  type: "location";
  location_id: string;
}

export interface TimeBlockCondition {
  type: "timeBlock";
  start_time: number; // 0-1440 minutes
  duration: number;
}

export interface CharacterLocationCondition {
  type: "characterLocation";
  character_id: string;
  location_id: string;
}

export type Condition =
  | LocationCondition
  | TimeBlockCondition
  | CharacterLocationCondition;

// Event
export interface Event {
  id: string;
  description: string;
  type: EventType;
  priority: Priority;
  conditions: Condition[];
}

// Zod Schemas

export const PrioritySchema = z.object({
  value: z.enum(["mandatory", "optional"]),
  index: z.number().int().min(0).max(9999),
});

export const LocationConditionSchema = z.object({
  type: z.literal("location"),
  location_id: z.string().min(1),
});

export const TimeBlockConditionSchema = z.object({
  type: z.literal("timeBlock"),
  start_time: z.number().int().min(0).max(1440),
  duration: z.number().int().min(1),
});

export const CharacterLocationConditionSchema = z.object({
  type: z.literal("characterLocation"),
  character_id: z.string().min(1),
  location_id: z.string().min(1),
});

export const ConditionSchema = z.discriminatedUnion("type", [
  LocationConditionSchema,
  TimeBlockConditionSchema,
  CharacterLocationConditionSchema,
]);

export const EventTypeSchema = z.enum([
  "character_conversation",
  "player_activity",
]);

export const EventSchema = z.object({
  id: z.string(),
  description: z.string().min(1),
  type: EventTypeSchema,
  priority: PrioritySchema,
  conditions: z.array(ConditionSchema),
});
