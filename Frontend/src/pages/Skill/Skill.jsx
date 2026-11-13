import React, { useEffect, useState } from "react";
import { getSkills } from "../../api/skillApi.js";
import { CodeXml } from "lucide-react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const skillsResponse = await getSkills();

        setSkills(Array.isArray(skillsResponse.data) ? skillsResponse.data : []);
      } catch (error) {
        console.log("Failed to load skills", error);
      }
    };

    loadSkills();
  }, []);

  return (
    <section
      id="skills"
      className="section grid gap-[clamp(28px,7vw,84px)] max-[860px]:grid-cols-1 py-18 border-t border-(--line)"
    >
      <div>
        <div className="section-heading">
          <div className="px-5 py-4 bg-(--olive) text-(--primary) rounded-3xl inline-flex">
            <CodeXml size={40} />
          </div>
          <p className="section-kicker text-6xl tracking-tight text-muted">
            Skills
          </p>
        </div>


        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-15" aria-label="Skills">
          {skills.map((skill) => (
            <span
              key={skill.id || skill.name}
              className="flex min-h-14 justify-center items-center border border-(--line) rounded-2xl px-3.5 py-2.5 text-center text-[0.92rem] font-extrabold text-ink bg-[rgba(255,250,241,0.72)] break-words"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
