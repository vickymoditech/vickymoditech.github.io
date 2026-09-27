import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Vicky Modi home">
        <span className="brand-mark">VM</span>
        <span className="brand-name">Vicky Modi</span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Overview</NavLink>
        <NavLink to="/projects">Selected work</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/resume">Résumé</NavLink>
      </nav>
      <a className="header-contact" href="mailto:vickymoditech@gmail.com">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
};

export default Header;
