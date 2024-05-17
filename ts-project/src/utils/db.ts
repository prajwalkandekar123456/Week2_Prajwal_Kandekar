import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TestOrder",
  password: "root",
  port: 5432,
});

export const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error("Database connection error", err);
    process.exit(1);
  }
};

export default pool;
