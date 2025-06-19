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
              <i class="fa-solid fa-code"></i>   Technical Skills
            </h2>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-database"></i>   Databases 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(0, 4).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code"></i>   Back-end Development 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(4, 13).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code"></i>   Front-end Development 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(13, 24).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-brands fa-aws"></i>   AWS Cloud Services 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(24, 35).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-credit-card"></i>   Payment Integration 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(35, 38).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-credit-card" />   Extra 
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(38, 60).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Page>

        <Page>
          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-diagram-project"></i>   Projects
            </h2>
            <Project projects={[...projects.slice(0, 3)]} />

            <h2 class="section-header">
              <i class="fa-solid fa-user-graduate"></i>   EDUCATION
            </h2>

            <div class="education-item">
              <h3 class="degree">
                Master of Science in Information Technology (MSC IT)
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
