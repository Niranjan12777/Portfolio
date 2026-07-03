import React from "react";
import { useAuth } from "../../context/authContext.jsx";

const items = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Hero", href: "/admin/hero" },
  { label: "About", href: "/admin/about" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Skills", href: "/admin/skills" },
  { label: "Messages", href: "/admin/messages" },
];

function AdminNavbar() {
  const { admin, logout } = useAuth();
  const currentPath = window.location.pathname;

  const handleLogout = () => {
    logout();
    window.location.href = "/admin/login";
  };

  return (
    <header className="admin-navbar sticky top-0 z-20 border-b border-[#e6d8c2] bg-[#fbf5ea]/95 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <a className="flex items-center gap-3 font-black text-[#24211f]" href="/admin/dashboard">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#24211f]">N.</span>
            <span>Admin Panel</span>
          </a>
          <button
            className="rounded-full border border-[#24211f] px-4 py-2 text-sm font-bold lg:hidden"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <nav className="admin-nav-scroll flex gap-2 overflow-x-auto pb-1">
          {items.map((item) => {
            const active = currentPath === item.href || (currentPath === "/admin" && item.href === "/admin/dashboard");
            return (
              <a
                className={`admin-nav-link rounded-full px-4 py-2 text-sm font-bold ${
                  active ? "admin-nav-link-active" : "text-[#70665c] hover:bg-[#fffaf1]"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-sm font-semibold text-[#70665c]">{admin?.email || "Admin"}</span>
          <button
            className="rounded-full border border-[#24211f] px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-md"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
