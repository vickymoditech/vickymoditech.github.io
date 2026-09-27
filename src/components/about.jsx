import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import ProjectVisual from "./ProjectVisual";

function About() {
  const featuredProjects = [
    ...projectsData.filter((project) => project.featured),
    projectsData.find((project) => project.id === 1),
  ].filter(Boolean).slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Portfolio <span className="eyebrow-divider">/</span> Hamilton, Ontario</p>
          <h1>Lead Full-Stack <span>Developer.</span></h1>
          <p className="hero-summary">
            I&apos;m Vicky Modi, a lead full-stack developer with 8+ years delivering production web and mobile products across hospitality, compliance, and e-commerce. I combine architecture, backend systems, and React delivery with a focus on performance and reliable workflows.
          </p>
          <p className="hero-note">My least optimized workflow? Deciding what to have for dinner.</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/projects">View selected projects <span aria-hidden="true">↗</span></Link>
            <Link className="button-text-link" to="/resume">Résumé &amp; experience <span aria-hidden="true">↓</span></Link>
            <a className="button-text-link" href="https://www.youtube.com/@VickyModi123" target="_blank" rel="noopener noreferrer">Study &amp; project videos <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-proof" aria-label="Career highlights">
            <div><strong>8+</strong><span>years building<br />production software</span></div>
            <div><strong>4</strong><span>countries where I&apos;ve<br />worked and shipped</span></div>
            <div><strong>70%</strong><span>less manual effort<br />through automation</span></div>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame">
            <img src="/img/profile.jpg" alt="Portrait of Vicky Modi" />
          </div>
          <div className="portrait-caption"><span className="caption-line" /> Product-minded engineering, end to end</div>
          <div className="portrait-index" aria-hidden="true">01 / 04</div>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2 id="featured-title">Selected projects.</h2></div>
          <Link className="button-text-link" to="/projects">All projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <Link className="featured-card" to={`/projectDetail/${project.id}`} key={project.id}>
              <div className="featured-image">
                {project.images?.[0]?.src || project.logo ? (
                  <img src={project.images?.[0]?.src || project.logo} alt={`${project.title} interface`} loading="lazy" />
                ) : (
                  <ProjectVisual project={project} />
                )}
                <span className="featured-number">0{index + 1}</span>
                <span className="featured-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="featured-meta"><span>{project.companyName}</span><span>{project.role}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach-strip">
        <p className="eyebrow">Across teams &amp; products</p>
        <p>I&apos;ve led end-to-end product workflows, automated recurring work, and improved backend performance across telecom, tax, hospitality, and compliance products.</p>
        <div className="approach-tags" aria-label="Companies and products">
          <span>TELUS</span>
          <span>Intuit · QuickBooks</span>
          <span>Guzman y Gomez</span>
          <span>DOT Compliance</span>
          <span>Inginim Software</span>
          <span>Lanet Team</span>
        </div>
      </section>
    </div>
  );
}

export default About;
