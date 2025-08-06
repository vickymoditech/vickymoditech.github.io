import html2pdf from "html2pdf.js";
import React, { Fragment, useEffect } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
import company from "../../data/company.json";
import projects from "../../data/projects.json";
import skill from "../../data/skills.json";
import Project from "./project";
import "./resume.css";

const Resume = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pdfDownload = () => {
    window.scroll(0, 0);
    const element = document.getElementById("content");

    const options = {
      margin: 0,
      filename: "Vicky_Modi.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <Fragment>
      <div
        id="content"
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Page>
          <About />
          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-briefcase"></i>   Work Experience
            </h2>
            {company.slice(0, 1).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        <Page>
          <div class="section">
            {company.slice(1, 4).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        <Page>
          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-code" />   Technical Skills
            </h2>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-database" />   Databases 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill
                  .slice(0, 6)
                  .map((s) => s.name)
                  .join(", ")}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code" />   Back-end Development 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill
                  .slice(6, 15)
                  .map((s) => s.name)
                  .join(", ")}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code" />   Front-end Development 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill
                  .slice(15, 26)
                  .map((s) => s.name)
                  .join(", ")}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-brands fa-aws" />   AWS Cloud Services 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill
                  .slice(26, 39)
                  .map((s) => s.name)
                  .join(", ")}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-credit-card" />   Payment Integration 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill
                  .slice(39, 42)
                  .map((s) => s.name)
                  .join(", ")}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code" />   Extra 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill
                  .slice(42, 60)
                  .map((s) => s.name)
                  .join(", ")}
              </div>
            </div>

            <h2 class="section-header">
              <i class="fa-solid fa-diagram-project" />   Projects
            </h2>

            <Project projects={[...projects.slice(0, 2)]} />
          </div>
        </Page>

        <Page>
          <div class="section">
            <Project projects={[...projects.slice(2, 3)]} />

            <div className="see-more">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://vickymoditech.github.io/#/projects"
              >
                See More Projects   <i class="fa-solid fa-angles-right"></i>
              </a>
            </div>

            <h2 class="section-header">
              <i class="fa-solid fa-user-graduate" />   EDUCATION
            </h2>

            <div class="education-item">
              <h3 class="degree">
                Master of Science in Information Technology (MSC-IT)
              </h3>
              <p class="school">UKA TARSADIA UNIVERSITY</p>
              <p class="education-years">Sep 2012 - Oct 2017</p>
            </div>
          </div>
        </Page>
      </div>
      <button className="download" onClick={pdfDownload}>
        <i id="download-btn" className="fa-sharp fa-solid fa-circle-down"></i>
      </button>
    </Fragment>
  );
};

export default Resume;
