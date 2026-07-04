import React, { useEffect, useState } from "react";
import { getHero } from "../../api/heroApi.js";
import { getProjectCount } from "../../api/projectApi.js";
import { getSkillCount } from "../../api/skillApi.js";
import { getImageUrl } from "../../utils/media.js";
import "./Home.css";

function Home() {
  const [hero, setHero] = useState(null);
  const [stats, setStats] = useState({ projects: 0, skills: 0 });

  useEffect(() => {
    const loadHome = async () => {
      try {
        const [heroResponse, projectCount, skillCount] = await Promise.all([
          getHero(),
          getProjectCount(),
          getSkillCount(),
        ]);

        setHero(heroResponse.data || null);
        setStats({
          projects: projectCount.data?.count || 0,
          skills: skillCount.data?.count || 0,
        });
      } catch (error) {
        console.error("Failed to load home content", error);
      }
    };

    loadHome();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="section-kicker text-6xl tracking-tight text-muted mb-15">
          {hero?.portfolio_title || "Portfolio"}
        </p>
        <h1 className="leading-24">
          <span className="inline-block w-full font-bold">
            {hero?.name || "Hello this is Name"}
            {hero?.role ? `. ${hero.role}` : ""}
          </span>
        </h1>
        <p className="intro">
          {hero?.description || "Loading portfolio introduction..."}
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View work
          </a>
          <a className="button secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Portfolio summary">
        <div className="portrait-mark">
          {getImageUrl(hero, ["hero_image", "heroImage", "image_url", "imageUrl"]) ? (
            <img src={getImageUrl(hero, ["hero_image", "heroImage", "image_url", "imageUrl"])} alt={hero?.name || "Hero"} />
          ) : (
            <span>UI</span>
          )}
        </div>
        <div className="stat-grid">
          <div>
            <strong>{stats.projects}</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>{stats.skills}</strong>
            <span>Core skills</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
