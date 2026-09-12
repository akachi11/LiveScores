export default {
    schema: "./src/db/schema.js",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgres://postgres:devpass123@localhost:5432/sports_app",
    },
};