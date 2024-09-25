import React from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "./projectsData.json";
import "../App.css";

function Projects() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  if (!projectsData) {
    return <div>Project not found.</div>;
  }
  return (
    <div className="product-section">
      <h1 className="w3-animate-bottom" style={{ fontSize: "45px" }}>
        Projects
      </h1>
      {projectsData.map((project) => {
        return (
          <section
            className="w3-animate-bottom profile-section h_300"
            style={{ justifyContent: "space-around" }}
          >
            <div className="profile-content">
              <div className="profile-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="button-group">
                <span
                  onClick={() => click(`/projectDetail/${project.id}`)}
                  className="button resume"
                  style={{
                    width: "150px",
                    height: "36px",
                    borderRadius: "28px",
                  }}
                >
                  View More
                </span>
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
