Create TABLE hero_section (
  id SERIAL PRIMARY KEY,
  portfolio_title VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(150) NOT NULL,
  description TEXT,
  hero_image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);