import React from "react";
import AdminLayout from "./components/AdminLayout.jsx";
import Login from "./pages/Login.jsx";
import AboutManager from "./pages/AboutManager.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import HeroManager from "./pages/HeroManager.jsx";
import MessagesManager from "./pages/MessagesManager.jsx";
import ProjectsManager from "./pages/ProjectsManager.jsx";
import SkillsManager from "./pages/SkillsManager.jsx";
import { useAuth } from "../context/authContext.jsx";
import "./Admin.css";

const routes = {
  "/admin": Dashboard,
  "/admin/dashboard": Dashboard,
  "/admin/hero": HeroManager,
  "/admin/about": AboutManager,
  "/admin/projects": ProjectsManager,
  "/admin/skills": SkillsManager,
  "/admin/messages": MessagesManager,
};

function AdminApp() {
  const { loading, isAuthenticated } = useAuth();
  const path = window.location.pathname;
  const Page = routes[path] || Dashboard;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbf5ea] px-6 py-10 text-[#24211f]">
        <div className="admin-card mx-auto max-w-xl p-8">Checking session...</div>
      </div>
    );
  }

  if (!isAuthenticated || path === "/admin/login") {
    return <Login />;
  }

  return (
    <AdminLayout>
      <Page />
    </AdminLayout>
  );
}

export default AdminApp;
