import { pool } from "../config/db.js";

export const getHeroSection = async () => {
  const result = await pool.query(
    `SELECT * FROM hero_section LIMIT 1`
  );

  return result.rows[0] || null;
};

export const updateHeroSection = async ({
  portfolioTitle,
  name,
  role,
  description,
  heroImage
}) => {
  const result = await pool.query(
    `
    UPDATE hero_section
    SET
      portfolio_title = $1,
      name = $2,
      role = $3,
      description = $4,
      hero_image = $5,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
    RETURNING *
    `,
    [portfolioTitle, name, role, description, heroImage]
  );

  return result.rows[0] || null;
};
