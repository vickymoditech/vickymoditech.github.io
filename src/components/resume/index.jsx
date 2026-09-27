import html2pdf from "html2pdf.js";
import React, { useEffect, useState } from "react";
import Company from "./company";
import About from "./about";
import company from "../../data/company.json";
import projects from "../../data/projects.json";
import skill from "../../data/skills.json";
import "./resume.css";

const resumeMetrics = [
  { value: "70%", label: "less manual operational work through automation", source: "Guzman y Gomez · menu and product sync" },
  { value: "30%", label: "team productivity improvement", source: "Lanet Team · internal tools" },
  { value: "10+", label: "applications delivered", source: "Inginim · fintech, e-commerce, HR" },
];

const skillGroups = [
  { title: "Backend & architecture", names: ["Typescript", "Node", "Nest", "Microservices"] },
  { title: "Frontend", names: ["React", "Next", "Material UI", "Tailwind"] },
  { title: "Cloud & integrations", names: ["Lambda", "S3", "Cognito", "ApiGateway", "Cloudformation", "Sqs"] },
  { title: "Data", names: ["Mysql", "Postgres", "Mongodb", "Redis", "Dynamodb"] },
  { title: "Quality & performance", names: ["Query Optimization", "Docker, CICD", "Unit Integration Testing", "Performance Testing", "Serverless"] },
];

const Resume = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [pdfStatus, setPdfStatus] = useState("");

  const selectedProjects = [14, 15, 1]
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter(Boolean);

  const groupedSkills = skillGroups.map((group) => ({
    ...group,
    skills: skill
      .filter((item) => group.names.includes(item.name))
      .map((item) => item.name),
  }));

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (!pdfStatus) return undefined;

    const statusTimeout = window.setTimeout(() => setPdfStatus(""), 5000);
    return () => window.clearTimeout(statusTimeout);
  }, [pdfStatus]);

  const pdfDownload = () => {
    window.scroll(0, 0);
    const element = document.getElementById("content");

    const options = {
      margin: 0,
      filename: "Vicky_Modi.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, windowWidth: 794, useCORS: true },
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: [
          ".resume-intro",
          ".resume-metric",
          ".resume-experience .job",
          ".resume-project",
          ".resume-skill-group",
          ".resume-education",
        ],
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    setIsExporting(true);
    setPdfStatus("");
    element.classList.add("pdf-export");
    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(() => {
        element.classList.remove("pdf-export");
        setIsExporting(false);
        setPdfStatus("Résumé PDF export started.");
      })
      .catch((error) => {
        element.classList.remove("pdf-export");
        setIsExporting(false);
        setPdfStatus("PDF export failed. Use your browser’s Print command to save a copy.");
        console.error("Résumé PDF export failed", error);
      });
  };

  return (
    <>
      <div id="content" className="resume-document">
        <About />

        <section className="resume-metrics" aria-label="Career impact">
          {resumeMetrics.map((metric) => (
            <div className="resume-metric" key={metric.value}>
              <strong>{metric.value}</strong>
              <span className="resume-metric-label">{metric.label}</span>
              <span className="resume-metric-source">{metric.source}</span>
            </div>
          ))}
        </section>

        <section className="resume-section resume-experience-section">
          <p className="eyebrow">Career history</p>
          <h2 className="resume-section-title">Experience</h2>
          <div className="resume-experience">
            {company.map((companyRecord) => (
              <Company company={companyRecord} key={companyRecord.id} />
            ))}
          </div>
        </section>

        <div className="resume-support">
          <section className="resume-section resume-skills">
            <p className="eyebrow">Technical toolkit</p>
            <h2 className="resume-section-title">Core skills</h2>
            <div className="resume-skill-groups">
              {groupedSkills.map((group) => (
                <div className="resume-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section resume-education">
            <p className="eyebrow">Education</p>
            <h2 className="resume-section-title">MSc Information Technology</h2>
            <p>UKA Tarsadia University</p>
            <p className="resume-muted">2012 — 2017</p>
          </section>
        </div>

        <section className="resume-section resume-projects">
          <p className="eyebrow">Selected work</p>
          <h2 className="resume-section-title">Lead projects</h2>
          <div className="resume-project-list">
            {selectedProjects.map((project) => {
              const projectHighlights = project.focus?.length
                ? project.focus.slice(0, 3)
                : project.technologies.slice(0, 4);

              return (
                <article className="resume-project" key={project.id}>
                  <div className="resume-project-meta">
                    <span>{project.companyName}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="resume-project-focus">
                    {projectHighlights.map((focus) => <span key={focus}>{focus}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      {pdfStatus && <p className="pdf-status" role="status">{pdfStatus}</p>}
      <button
        className="download"
        onClick={pdfDownload}
        disabled={isExporting}
        aria-label={isExporting ? "Preparing résumé PDF" : "Download résumé as PDF"}
      >
        <i id="download-btn" className="fa-sharp fa-solid fa-circle-down" aria-hidden="true"></i>
      </button>
    </>
  );
};

export default Resume;
