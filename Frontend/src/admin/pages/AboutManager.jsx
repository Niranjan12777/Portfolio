import React, { useEffect, useState } from "react";
import { getAbout, updateAbout } from "../../api/aboutApi.js";
import Feedback from "../components/Feedback.jsx";
import FormField from "../components/FormField.jsx";
import { getErrorMessage } from "../utils.js";

const emptyAbout = { heading: "", subtitle: "", content: "" };

function AboutManager() {
  const [form, setForm] = useState(emptyAbout);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadAbout = async () => {
      try {
        setLoading(true);
        const { data } = await getAbout();
        setForm({ ...emptyAbout, ...(data || {}) });
      } catch (err) {
        setError(getErrorMessage(err, "Could not load about section"));
      } finally {
        setLoading(false);
      }
    };

    loadAbout();
  }, []);

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await updateAbout(form);
      setForm({ ...emptyAbout, ...(data || form) });
      setSuccess("About section updated successfully.");
    } catch (err) {
      setError(getErrorMessage(err, "Could not update about section"));
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="grid gap-6">
      <div>
        <p className="admin-kicker">About</p>
        <h1 className="text-3xl font-black text-[#24211f] sm:text-5xl">About management</h1>
      </div>

      <form className="admin-card grid gap-5 p-5 sm:p-7" onSubmit={handleSubmit}>
        <Feedback error={error} success={success} />
        {loading ? (
          <p className="text-[#70665c]">Loading about content...</p>
        ) : (
          <>
            <div className="grid gap-5 lg:grid-cols-2">
              <FormField label="Heading" name="heading" value={form.heading || ""} onChange={handleChange} />
              <FormField label="Subtitle" name="subtitle" value={form.subtitle || ""} onChange={handleChange} />
            </div>
            <FormField label="Content" name="content" value={form.content || ""} onChange={handleChange} textarea />
            <button className="admin-button-primary justify-self-start" type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save about"}
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default AboutManager;
