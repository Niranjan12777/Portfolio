
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Active section observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) =>
      link.href.replace("#", "")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close dropdown after selecting a link
  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="navbar" aria-label="Primary navigation">

      {/* Logo */}
      <a className="flex items-center" href="#home" aria-label="Portfolio home">
        <span className="logo-icon">N</span>
        <span className="logo-title">Niranjan</span>
      </a>

      {/* Mobile menu toggle */}
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <Menu size={24} />
      </button>

      {/* Navigation */}
      <nav
        id="primary-navigation"
        ref={navRef}
        data-open={menuOpen}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => {
          const section = link.href.replace("#", "");
          const isActive = activeSection === section;

          return (
            <a
              className={`main-nav-link ${isActive ? "active" : ""}`}
              href={link.href}
              key={link.href}
              aria-current={isActive ? "location" : undefined}
              onClick={() => handleNavClick(section)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;
