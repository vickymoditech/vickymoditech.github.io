import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo"></div>
      <div className="menu">
        <ul>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                click("/");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/resume/resume.html"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                click("/projects");
              }}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
