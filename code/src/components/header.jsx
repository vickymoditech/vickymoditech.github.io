import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="menu">
        <ul>
          <li>
            <a target="_blank" href="/resume/resume.html">
              Resume
            </a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
