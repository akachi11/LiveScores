import {
    pgTable,
    pgEnum,
    serial,
    varchar,
    integer,
    timestamp,
    jsonb,
} from "drizzle-orm/pg-core";

export const matchStatusEnum = pgEnum("match_status", [
    "scheduled",
    "live",
    "finished",
]);

export const matches = pgTable("matches", {
    id: serial("id").primaryKey(),
    sport: varchar("sport", { length: 50 }).notNull(),
    homeTeam: varchar("home_team", { length: 100 }).notNull(),
    awayTeam: varchar("away_team", { length: 100 }).notNull(),
    status: matchStatusEnum("status").notNull().default("scheduled"),
    startTime: timestamp("start_time", { withTimezone: true }).notNull(),
    endTime: timestamp("end_time", { withTimezone: true }),
    homeScore: integer("home_score").notNull().default(0),
    awayScore: integer("away_score").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});

export const commentary = pgTable("commentary", {
    id: serial("id").primaryKey(),
    matchId: integer("match_id")
        .notNull()
        .references(() => matches.id),
    minute: integer("minute"),
    sequence: integer("sequence").notNull(),
    period: varchar("period", { length: 50 }),
    eventType: varchar("event_type", { length: 50 }).notNull(),
    actor: varchar("actor", { length: 100 }),
    team: varchar("team", { length: 100 }),
    message: varchar("message", { length: 500 }).notNull(),
    metadata: jsonb("metadata"),
    tags: varchar("tags", { length: 255 }).array(),
    createdAt: timestamp("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});