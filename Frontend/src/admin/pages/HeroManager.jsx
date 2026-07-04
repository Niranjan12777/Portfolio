import React, { useEffect, useState } from "react";
import { getHero, updateHero } from "../../api/heroApi.js";
import Feedback from "../components/Feedback.jsx";
import FormField from "../components/FormField.jsx";
import { getErrorMessage } from "../utils.js";
import { getImageUrl } from "../../utils/media.js";

const emptyHero = {
  portfolio_title: "",
  name: "",
  role: "",
  description: "",
  hero_image: "",
};

function HeroManager() {
  const [form, setForm] = useState(emptyHero);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadHero = async () => {
      try {
        setLoading(true);
        const { data } = await getHero();
        setForm({ ...emptyHero, ...(data || {}) });
      } catch (err) {
        setError(getErrorMessage(err, "Could not load hero section"));
      } finally {
        setLoading(false);
      }
    };

    loadHero();
  }, []);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await updateHero(form);
      setForm({ ...emptyHero, ...(data || form) });
      setSuccess("Hero section updated successfully.");
    } catch (err) {
      setError(getErrorMessage(err, "Could not update hero section"));
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="grid gap-6">
      <div>
        <p className="admin-kicker">Hero</p>
        <h1 className="text-3xl font-black text-[#24211f] sm:text-5xl">Hero management</h1>
      </div>

      <form className="admin-card grid gap-5 p-5 sm:p-7" onSubmit={handleSubmit}>
        <Feedback error={error} success={success} />
        {loading ? (
          <p className="text-[#70665c]">Loading hero content...</p>
        ) : (
          <>
            {getImageUrl(form, ["hero_image", "heroImage", "image_url", "imageUrl"]) && (
              <img
                className="h-64 w-full rounded-lg border border-[#e6d8c2] object-cover"
                src={getImageUrl(form, ["hero_image", "heroImage", "image_url", "imageUrl"])}
                alt={form.name || "Hero preview"}
              />
            )}
            <div className="grid gap-5 lg:grid-cols-2">
              <FormField label="Portfolio title" name="portfolio_title" value={form.portfolio_title || ""} onChange={handleChange} />
              <FormField label="Name" name="name" value={form.name || ""} onChange={handleChange} />
              <FormField label="Role" name="role" value={form.role || ""} onChange={handleChange} />
              <FormField label="Hero image URL" name="hero_image" value={form.hero_image || ""} onChange={handleChange} />
            </div>
            <FormField label="Description" name="description" value={form.description || ""} onChange={handleChange} textarea />
            <button className="admin-button-primary justify-self-start" type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save hero"}
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default HeroManager;
