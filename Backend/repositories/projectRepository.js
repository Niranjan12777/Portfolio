import { pool } from "../config/db.js";

export const getProjects = async () => {
  const result = await pool.query(
    `SELECT * FROM projects ORDER BY created_at DESC`
  );

  return result.rows;
};

export const createProject = async (
  title,
  description,
  githubUrl,
  liveUrl,
  imageUrl,
  featured
) => {
  const result = await pool.query(
    `
    INSERT INTO projects
    (title, description, github_url, live_url, image_url, featured)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `,
    [title, description, githubUrl, liveUrl, imageUrl, featured]
  );

  return result.rows[0];
};

export const updateProject = async (
  id,
  title,
  description,
  githubUrl,
  liveUrl,
  imageUrl,
  featured
) => {
  const result = await pool.query(
    `
    UPDATE projects
    SET
      title = $1,
      description = $2,
      github_url = $3,
      live_url = $4,
      image_url = $5,
      featured = $6,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $7
    RETURNING *
    `,
    [title, description, githubUrl, liveUrl, imageUrl, featured, id]
  );

  return result.rows[0];
};

export const deleteProject = async (id) => {
  await pool.query(
    `DELETE FROM projects WHERE id = $1`,
    [id]
  );
};