import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),

  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

const connectDB = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Connected!");
    console.log(result.rows[0]);
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;