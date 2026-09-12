import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema.js";

const pool = new Pool({
    connectionString: "postgres://postgres:devpass123@localhost:5432/sports_app",
});

export const db = drizzle(pool, { schema });