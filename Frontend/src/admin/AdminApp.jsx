import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout.jsx";
import Login from "./pages/Login.jsx";
import AboutManager from "./pages/AboutManager.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import HeroManager from "./pages/HeroManager.jsx";
import MessagesManager from "./pages/MessagesManager.jsx";
import ProjectsManager from "./pages/ProjectsManager.jsx";
import SkillsManager from "./pages/SkillsManager.jsx";
import { useAuth } from "../context/authContext.jsx";

import ProtectedRoute from "../routes/ProtectedRoute.jsx";
import "./Admin.css";

function ProtectedAdminPage({ children }) {
  return (
    <ProtectedRoute>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  );
}

function AdminApp() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbf5ea] px-6 py-10 text-[#24211f]">
        <div className="admin-card mx-auto max-w-xl p-8">Checking session...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<ProtectedAdminPage><Dashboard /></ProtectedAdminPage>} />
      <Route path="hero" element={<ProtectedAdminPage><HeroManager /></ProtectedAdminPage>} />
      <Route path="about" element={<ProtectedAdminPage><AboutManager /></ProtectedAdminPage>} />
      <Route path="projects" element={<ProtectedAdminPage><ProjectsManager /></ProtectedAdminPage>} />
      <Route path="skills" element={<ProtectedAdminPage><SkillsManager /></ProtectedAdminPage>} />
      <Route path="messages" element={<ProtectedAdminPage><MessagesManager /></ProtectedAdminPage>} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
}

export default AdminApp;
