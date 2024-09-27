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
            <a onClick={() => click("/")}>About</a>
          </li>
          <li>
            <a target="_blank" href="/resume/resume.html">
              Resume
            </a>
          </li>
          <li>
            <a onClick={() => click("/projects")}>Projects</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
