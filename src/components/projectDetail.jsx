import React from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../App.css";
import ProjectVisual from "./ProjectVisual";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === Number(id));
  const projectBadges = project?.technologies?.length ? project.technologies : project?.focus || [];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <Link className="button-text-link" to="/projects">Back to projects <span aria-hidden="true">↗</span></Link>
      </div>
    );
  }

  return (
    <article className="detail-page">
      <Link className="back-link" to="/projects"><span aria-hidden="true">←</span> All work</Link>
      <header className="detail-intro">
        <p className="eyebrow">{project.companyName} <span className="eyebrow-divider">/</span> {project.role}</p>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.description}</p>
        {project.link && project.link !== "#" && (
          <a className="button-primary" href={project.link} target="_blank" rel="noopener noreferrer">Visit product <span aria-hidden="true">↗</span></a>
        )}
      </header>

      {project.images?.[0] && (
        <figure className="detail-hero-image">
          <img
            src={project.images[0].src}
            alt={project.images[0].alt && !project.images[0].alt.startsWith("Description of image") ? project.images[0].alt : `${project.title} product screen`}
          />
        </figure>
      )}
      {!project.images?.[0] && project.visualTheme && (
        <figure className="detail-project-art">
          <ProjectVisual project={project} />
        </figure>
      )}

      <section className="detail-content">
        <div className="detail-aside">
          <p className="eyebrow">Implementation</p>
          <h2>End-to-end ownership</h2>
          <p>My role: <strong>{project.role}</strong></p>
          <p>Team: <strong>{project.companyName}</strong></p>
        </div>
        <div className="detail-sections">
          {project.data.map((section) => (
            <section className="detail-section" key={section.heading}>
              <h3>{section.heading}</h3>
              <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </section>
          ))}
        </div>
      </section>

      {projectBadges.length > 0 && (
        <section className="detail-tech">
          <p className="eyebrow">{project.technologies.length ? "Tools & technologies" : "Project focus"}</p>
          <div className="project-tags">{projectBadges.map((badge) => <span key={badge}>{badge}</span>)}</div>
        </section>
      )}

      {project.images?.length > 1 && (
        <section className="gallery-section">
          <div className="section-heading"><div><p className="eyebrow">Screens</p><h2>Inside the product.</h2></div></div>
          <div className="detail-gallery">
            {project.images.slice(1).map((image, index) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt && !image.alt.startsWith("Description of image") ? image.alt : `${project.title} screen ${index + 2}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default ProjectDetail;
