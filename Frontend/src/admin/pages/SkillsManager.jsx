import React, { useEffect, useState } from "react";
import { createSkill, deleteSkill, getSkills, updateSkill } from "../../api/skillApi.js";
import EmptyState from "../components/EmptyState.jsx";
import Feedback from "../components/Feedback.jsx";
import { getErrorMessage, getId } from "../utils.js";

function SkillsManager() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadSkills = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await getSkills();
      setSkills(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(getErrorMessage(err, "Could not load skills"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const resetForm = () => {
    setName("");
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim()) return;

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      if (editingId) {
        await updateSkill(editingId, { name: name.trim() });
        setSuccess("Skill updated successfully.");
      } else {
        await createSkill({ name: name.trim() });
        setSuccess("Skill created successfully.");
      }

      resetForm();
      await loadSkills();
    } catch (err) {
      setError(getErrorMessage(err, "Could not save skill"));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (skill) => {
    if (!window.confirm(`Delete "${skill.name}"?`)) return;

    try {
      setError("");
      setSuccess("");
      await deleteSkill(getId(skill));
      setSuccess("Skill deleted successfully.");
      await loadSkills();
    } catch (err) {
      setError(getErrorMessage(err, "Could not delete skill"));
    }
  };

  return (
    <section className="grid gap-6">
      <div>
        <p className="admin-kicker">Skills</p>
        <h1 className="text-3xl font-black text-[#24211f] sm:text-5xl">Skills management</h1>
      </div>

      <Feedback error={error} success={success} />

      <form className="admin-card flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:p-7" onSubmit={handleSubmit}>
        <label className="grid flex-1 gap-2 text-sm font-black">
          {editingId ? "Edit skill" : "Add skill"}
          <input
            className="admin-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="React"
          />
        </label>
        <div className="flex gap-2">
          {editingId && (
            <button className="admin-button-secondary" type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
          <button className="admin-button-primary" type="submit" disabled={saving}>
            {saving ? "Saving..." : editingId ? "Update skill" : "Add skill"}
          </button>
        </div>
      </form>

      {loading ? (
        <div className="admin-card p-6 text-[#70665c]">Loading skills...</div>
      ) : skills.length === 0 ? (
        <EmptyState
          title="No skills yet"
          description="Add skills to show the technologies and strengths on your portfolio."
          actionLabel="Add Skills"
          onAction={() => document.querySelector(".admin-input")?.focus()}
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article className="admin-card flex items-center justify-between gap-3 p-4" key={getId(skill)}>
              <span className="font-black text-[#24211f]">{skill.name}</span>
              <div className="flex flex-wrap gap-2">
                <button
                  className="admin-button-secondary"
                  type="button"
                  onClick={() => {
                    setName(skill.name);
                    setEditingId(getId(skill));
                  }}
                >
                  Edit
                </button>
                <button className="admin-button-danger" type="button" onClick={() => handleDelete(skill)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SkillsManager;
