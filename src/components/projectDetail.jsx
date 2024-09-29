import React from "react";
import "../App.css";
import projectsData from "../data/projects.json";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));
  window.scroll(0,0);

  if (!project) {
    return (
      <div class="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-section">
      <h1 className="w3-animate-bottom" style={{ fontSize: "45px" }}>
        {project.title}
      </h1>
      <section
        className="profile-section"
        style={{ flexDirection: "column", justifyContent: "space-around" }}
      >
        {project.data.map((dt) => {
          return (
            <div
              className="profile-content"
              style={{ width: "100%", maxWidth: "unset" }}
            >
              <div className="w3-animate-bottom profile-details">
                <h2>{dt.heading}</h2>
                <ul style={{ paddingLeft: "50px" }}>
                  {dt.bullets.map((item) => (
                    <li>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        <div
          className="profile-content"
          style={{ width: "100%", maxWidth: "unset" }}
        >
          <div className="technologies">
            <h2>Technologies</h2>
            <div className="technologies-logo">
              {project.technologies.map((technology) => (
                <div class="click-chip background-blue">{technology.name}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-group">
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
      </section>
      <div
        className="product-image"
        style={{ maxWidth: "unset", maxHeight: "unset", height: "auto" }}
      >
        {project.images &&
          project.images.map((img) => (
            <img src={img.src} alt="Restaurant Reservation" />
          ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
