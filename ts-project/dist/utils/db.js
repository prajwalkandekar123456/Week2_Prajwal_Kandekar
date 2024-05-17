"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "TestOrder",
    password: "root",
    port: 5432,
});
const connectDb = async () => {
    try {
        await pool.connect();
        console.log("Connected to the database");
    }
    catch (err) {
        console.error("Database connection error", err);
        process.exit(1);
    }
};
exports.connectDb = connectDb;
exports.default = pool;
