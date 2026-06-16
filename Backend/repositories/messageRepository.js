import { pool } from "../config/db";

export const getMessages = async () => {
  const result = await pool.query(
    `SELECT * FROM messages ORDER BY created_at DESC`
  );

  return result.rows || null;
};

