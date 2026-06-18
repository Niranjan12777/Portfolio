import { pool } from "../config/db.js";

export const getSkills = async () => {
  const result = await pool.query(
    `SELECT * FROM skills ORDER BY id ASC`
  );

  return result.rows || null;
};

export const getSkillCount = async () => {
  const result = await pool.query(
    `SELECT COUNT(*) AS count FROM skills`
  );

  return Number(result.rows[0].count);
};

export const createSkill = async (name) => {
  const result = await pool.query(
    `INSERT INTO skills (name) VALUES ($1) RETURNING *`,
    [name]
  );

  return result.rows[0] || null;
};

export const updateSkill = async (id, name) => {
  const result = await pool.query(
    `
    UPDATE skills
    SET
      name = $1
    WHERE id = $2
    RETURNING *
    `,
    [name, id]
  );

  return result.rows[0] || null;
};

export const deleteSkill = async (id) => {
  await pool.query(
    `
    DELETE FROM skills
    WHERE id = $1
    `,
    [id]
  );
};