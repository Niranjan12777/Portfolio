import React from "react";
import { navLinks } from "../../data/portfolio.js";
import "./Header.css";

function Header() {
  return (
    <header className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Portfolio home">
        N.
      </a>
      <nav>
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
