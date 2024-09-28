import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {
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
            <span
              onClick={() => {
                click("/");
              }}
            >
              About
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                click("/resume");
              }}
            >
              Resume
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                click("/projects");
              }}
            >
              Projects
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
