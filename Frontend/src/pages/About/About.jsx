import React, { useEffect, useState } from "react";
import { getAbout } from "../../api/aboutApi.js";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const aboutResponse = await getAbout();

        setAbout(aboutResponse.data || null);
      } catch (error) {
        console.error("Failed to load about content", error);
      }
    };

    loadAbout();
  }, []);

  return (
    <section
      id="about"
      className="section grid gap-[clamp(28px,7vw,84px)] max-[860px]:grid-cols-1 py-18 border-t border-(--line)"
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
    </section>
  );
}

export default About;
