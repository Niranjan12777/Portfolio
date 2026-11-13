import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { Menu } from "lucide-react";

const items = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Hero", href: "/admin/hero" },
  { label: "About", href: "/admin/about" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Skills", href: "/admin/skills" },
  { label: "Messages", href: "/admin/messages" },
];

function AdminNavbar() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <header className="admin-navbar sticky top-0 z-20 border-b border-[#e6d8c2] bg-(--paper) px-10 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex justify-between items-center max-w-7xl gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3 font-black text-[#24211f]" to="/admin/dashboard">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#24211f]">N.</span>
            <span>Admin Panel</span>
          </Link>
        </div>



        <div className="flex lg:hidden" ref={profileRef}>

          <Menu
            className="flex"
            size={20}
            onClick={() => setProfileOpen((current) => !current)}
          >
          </Menu>

          {profileOpen && (
            <div className="absolute bg-(--paper) rounded-bl-2xl rounded-br-2xl right-2 top-full overflow-hidden sm:w-70 w-full flex-col z-100 border border-(--line)">

              {/* Menu */}
              <div className="grid">
                {items.map((item) => (
                  <NavLink
                    className={({ isActive }) =>
                      `admin-nav-link rounded-lg ml-2 mr-2 px-4 py-2 text-md font-bold ${isActive ? "admin-nav-link-active" : "text-[#70665c] hover:bg-(--primary)"
                      }`
                    }
                    key={item.href}
                    to={item.href}
                    onClick={() => setProfileOpen((current) => !current)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center">
          <nav className="admin-nav-scroll flex mr-4 gap-2 overflow-x-auto">
            {items.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `admin-nav-link rounded-lg px-4 py-2 text-sm font-bold ${isActive ? "admin-nav-link-active" : "text-[#70665c] hover:bg-(--primary)"
                  }`
                }
                key={item.href}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="">
            <button
              className="rounded-full border border-[#24211f] px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-md"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
