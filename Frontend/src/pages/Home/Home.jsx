import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="section-kicker text-6xl tracking-tight text-muted mb-15">Portfolio 2026</p>
        <h1 className="leading-24">
          <span className="inline-block w-full font-bold">Hello this is Niranjan. I'm a Web Developer</span>
        </h1>
        <p className="intro">
          I create thoughtful digital experiences with clean interfaces, sharp
          interaction details, and responsive front-ends that feel easy to use.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View work
          </a>
          <a className="button secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Portfolio summary">
        <div className="portrait-mark">
          <span>UI</span>
        </div>
        <div className="stat-grid">
          <div>
            <strong>12+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Core skills</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
