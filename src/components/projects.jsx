import React from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../App.css";

function Projects() {
  const navigate = useNavigate();
  window.scroll(0, 0);

  const click = (path) => {
    navigate(path);
  };

  if (!projectsData) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="product-section">
      <h1 className="w3-animate-bottom" style={{ fontSize: "45px" }}>
        What I Built
      </h1>
      {projectsData.map((project, index) => {
        return (
          <section
            className="w3-animate-bottom profile-section h_300"
            style={{ justifyContent: "space-around" }}
            key={index}
          >
            <div className="profile-content" style={{ maxWidth: "unset" }}>
              <div className="profile-details">
                <h3>{project.title}</h3>
                <h4 style={{ gap: "5px" }}>Role : {project.role}</h4>
                <h4 style={{ gap: "5px" }}>
                  Company / Freelance :{" "}
                  <a
                    href={project.companySite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.companyName}{" "}
                  </a>
                  <img
                    style={{ height: "50px" }}
                    alt="freelance logo"
                    src={project.workLogo}
                  />
                </h4>
                <p>{project.description}</p>
              </div>
              <div className="button-group">
                <button
                  onClick={() => click(`/projectDetail/${project.id}`)}
                  className="learn-more"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>
                <button
                  className="url-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>URL</span>
                </button>
              </div>
            </div>
            <div className="w3-animate-bottom product-image">
              <img src={project.logo} alt="Restaurant Reservation" />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Projects;
