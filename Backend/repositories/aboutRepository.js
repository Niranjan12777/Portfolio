import { pool } from "../config/db.js";

export const getAbout = async () => {
  const result = await pool.query(
    `SELECT * FROM about LIMIT 1`
  );

  return result.rows[0] || null;
};

export const updateAbout = async ({
  heading,
  subtitle,
  content
}) => {
  const result = await pool.query(
    `
    UPDATE about
    SET
      heading = $1,
      subtitle = $2,
      content = $3,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
    RETURNING *
    `,
    [heading, subtitle, content]
  );

  return result.rows[0] || null;
};