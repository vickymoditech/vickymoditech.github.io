import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../App.css";
import projectsData from "./projectsData.json";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found.</div>;
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
                <Chip
                  icon={<FontAwesomeIcon class="fa-brands fa-node" />} // Use Font Awesome icon
                  label={technology.name} // The label for the Chip
                  variant="outlined" // You can use 'filled' or 'outlined'
                  color="primary" // Customize the color as needed
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w3-animate-bottom button-group">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button resume"
            style={{
              width: "150px",
              height: "36px",
              borderRadius: "28px",
            }}
          >
            URL
          </a>
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
