import React, { useEffect, useState } from "react";
import { getAbout } from "../../api/aboutApi.js";
import { getSkills } from "../../api/skillApi.js";

function About() {
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const [aboutResponse, skillsResponse] = await Promise.all([
          getAbout(),
          getSkills(),
        ]);

        setAbout(aboutResponse.data || null);
        setSkills(Array.isArray(skillsResponse.data) ? skillsResponse.data : []);
      } catch (error) {
        console.error("Failed to load about content", error);
      }
    };

    loadAbout();
  }, []);

  return (
    <section
      id="about"
      className="grid gap-[clamp(28px,7vw,84px)] max-[860px]:grid-cols-1 py-18 border-t border-(--line)"
    >
      {/* Left */}
      <div className="flex flex-col h-full">
        <p className="section-kicker text-6xl tracking-tight text-muted mb-15">
          {about?.heading || "About Me"}
        </p>

        <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mb-8">
          {about?.subtitle || "A little about me."}
        </h2>

        <p className="text-[1.45rem] w-6xl tracking-tight leading-[1.8] text-(--muted)">
          {about?.content || "Loading about content..."}
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
              key={skill.id || skill.name}
              className="flex justify-center items-center border border-(--line) h-20 rounded-2xl px-3.5 py-2.5 text-[0.92rem] font-extrabold text-ink bg-[rgba(255,250,241,0.72)]"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
