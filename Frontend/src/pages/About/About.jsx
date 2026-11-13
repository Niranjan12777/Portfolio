import React, { useEffect, useState } from "react";
import { getAbout } from "../../api/aboutApi.js";
import { UserRound } from "lucide-react";

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
      className="section"
    >

      <div className="section-heading">
        <div className="px-5 py-4 bg-(--olive) text-(--primary) rounded-3xl inline-flex">
          <UserRound size={40} />
        </div>
        <p className="section-kicker text-6xl tracking-tight text-muted">
          {about?.heading || "About Me"}
        </p>

      </div>

      <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mt-15 mb-8">
        {about?.subtitle || "A little about me."}
      </h2>
      <p className="w-full text-[clamp(1rem,3.5vw,1.45rem)] tracking-tight leading-[1.8] text-(--muted)">
        {about?.content || "Loading about content..."}
      </p>
    </section>
  );
}

export default About;
