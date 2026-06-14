import React from "react";
import { skills } from "../../data/portfolio.js";

function About() {
  return (
    <section
      id="about"
      className="grid gap-[clamp(28px,7vw,84px)] max-[860px]:grid-cols-1 py-18 border-t border-(--line)"
    >
      {/* Left */}
      <div className="flex flex-col h-full">
        <p className="section-kicker text-6xl tracking-tight text-muted mb-15">
          About Me
        </p>

        <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mb-8">
          A little about me.
        </h2>

        <p className="text-[1.45rem] w-6xl tracking-tight leading-[1.8] text-(--muted)">
          I work across interface design and React development, turning early
          ideas into polished screens and production-ready components. My style
          is direct, modern, and focused on helping people move through a
          product with confidence. I work across interface design and React development, turning early
          ideas into polished screens and production-ready components. My style
          is direct, modern, and focused on helping people move through a
          product with confidence.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col ">


        <p className="section-kicker text-6xl tracking-tight text-muted mb-20">
          Skills
        </p>

        <div className="grid grid-cols-6 gap-15" aria-label="Skills">
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex justify-center items-center border border-(--line) h-20 rounded-2xl px-3.5 py-2.5 text-[0.92rem] font-extrabold text-ink bg-[rgba(255,250,241,0.72)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;