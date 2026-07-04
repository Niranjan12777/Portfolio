import React, { useEffect, useState } from "react";
import { getMessages } from "../../api/messageApi.js";
import { getProjectCount } from "../../api/projectApi.js";
import { getSkillCount } from "../../api/skillApi.js";
import Feedback from "../components/Feedback.jsx";
import { getErrorMessage } from "../utils.js";

const statMeta = [
  { key: "projects", label: "Total Projects" },
  { key: "skills", label: "Total Skills" },
  { key: "messages", label: "Total Messages" },
];

function Dashboard() {
  const [stats, setStats] = useState({ projects: 0, skills: 0, messages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        setError("");
        const [projects, skills, messages] = await Promise.all([
          getProjectCount(),
          getSkillCount(),
          getMessages(),
        ]);

        setStats({
          projects: projects.data?.count || 0,
          skills: skills.data?.count || 0,
          messages: Array.isArray(messages.data) ? messages.data.length : 0,
        });
      } catch (err) {
        setError(getErrorMessage(err, "Could not load dashboard stats"));
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <section className="grid gap-6">
      <div>
        <p className="admin-kicker">Dashboard</p>
        <h1 className="text-3xl font-black text-[#24211f] sm:text-5xl">Portfolio overview</h1>
      </div>

      <Feedback error={error} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statMeta.map((stat) => (
          <article className="admin-card p-6" key={stat.key}>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#70665c]">
              {stat.label}
            </p>
            <strong className="mt-5 block text-5xl font-black text-[#24211f]">
              {loading ? "..." : stats[stat.key]}
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
