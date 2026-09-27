import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../App.css";
import ProjectVisual from "./ProjectVisual";

function Projects() {
  const orderedProjects = [
    ...projectsData.filter((project) => project.featured),
    ...projectsData.filter((project) => !project.featured),
  ];

  return (
    <div className="projects-page">
      <header className="page-intro">
        <p className="eyebrow">Project work <span className="eyebrow-divider">/</span> {orderedProjects.length} projects</p>
        <h1>Selected work<span className="accent-period">.</span></h1>
        <p>Systems and products built for customers, operators, and the teams behind them.</p>
      </header>
      <div className="project-list">
        {orderedProjects.map((project, index) => {
          const projectBadges = project.technologies.length ? project.technologies : project.focus || [];

          return (
          <article className="project-row" key={project.id}>
            <Link className="project-image" to={`/projectDetail/${project.id}`} aria-label={`View ${project.title} project details`}>
              {project.images?.[0]?.src || project.logo ? (
                <img src={project.images?.[0]?.src || project.logo} alt={`${project.title} interface`} loading="lazy" />
              ) : (
                <ProjectVisual project={project} />
              )}
              <span className="project-image-index">0{index + 1}</span>
            </Link>
            <div className="project-copy">
              <div className="project-meta"><span>{project.companyName}</span><span>{project.role}</span></div>
              <h2><Link to={`/projectDetail/${project.id}`}>{project.title}</Link></h2>
              <p>{project.description}</p>
              <div className="project-tags" aria-label={project.technologies.length ? "Technologies" : "Project focus"}>
                {projectBadges.slice(0, 4).map((badge) => <span key={badge}>{badge}</span>)}
              </div>
              <div className="project-actions">
                <Link to={`/projectDetail/${project.id}`}>View project details <span aria-hidden="true">↗</span></Link>
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Visit product <span aria-hidden="true">↗</span></a>
                )}
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
