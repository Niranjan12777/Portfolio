import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import Feedback from "../components/Feedback.jsx";

function Login() {
  const { loginAdmin } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setCredentials((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const result = await loginAdmin(credentials);

    if (result.success) {
      navigate("/admin/dashboard", { replace: true });
      return;
    }

    setError(result.message);
    setSubmitting(false);
  };

  return (
    <main className="admin-page grid min-h-screen place-items-center px-4 py-10">
      <form className="admin-card w-full max-w-md p-6 sm:p-8" onSubmit={handleSubmit}>
        <p className="text-sm font-black uppercase tracking-[0.12em] text-[#d85f45]">Admin</p>
        <h1 className="mt-3 text-3xl font-black text-[#24211f]">Welcome back</h1>
        <p className="mt-2 text-[#70665c]">Sign in to manage your portfolio content.</p>

        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-black">
            Email
            <input
              className="admin-input"
              name="email"
              type="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-black">
            Password
            <input
              className="admin-input"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </label>
          <Feedback error={error} />
          <button className="admin-button-primary w-full" type="submit" disabled={submitting}>
            {submitting ? "Signing in..." : "Login"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
