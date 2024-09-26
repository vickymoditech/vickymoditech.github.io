import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  return (
    <section
      className="w3-animate-top profile-section"
      style={{ height: "calc(100vh - 222px)" }}
    >
      <div className="profile-image">
        <img src="/img/profile.jpg" alt="Profile" />
      </div>
      <div className="profile-content">
        <div className="profile-details">
          <h1>VICKY MODI</h1>
          <h2>A Bit About Me</h2>
          <p>
            Developed, tested, deployed, and maintained scalable web and mobile
            applications. Designed and implemented complex menu structures for
            apps.
          </p>
        </div>
        <div className="button-group">
          <a target="_blank" href="/resume/resume.html">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">My Resume</span>
            </button>
          </a>
          <span onClick={() => click("/projects")}>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">My Projects</span>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
