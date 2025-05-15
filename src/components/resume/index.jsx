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
    const element = document.getElementById("content"); // Select the container for all pages

    // Configure options for html2pdf
    const options = {
      margin: 0,
      filename: "Vicky_Modi.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Generate PDF from the selected element
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
              <i class="fa-solid fa-briefcase"></i> &nbsp; Work Experience
            </h2>
            {company.slice(0, 1).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Work Experience</h2> */}
            {company.slice(1, 3).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Work Experience</h2> */}
            {company.slice(3, 4).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-diagram-project"></i> &nbsp; Projects
            </h2>
            <Project projects={[...projects.slice(0, 1)]} />
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Projects</h2> */}
            <Project projects={[...projects.slice(1, 5)]} />
          </div>
          <div className="see-more">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://vickymoditech.github.io/#/projects"
            >
              See More Projects &nbsp; <i class="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </Page>

        {/* <Page>
          <div class="section">
            <h2 class="section-header">Projects</h2>
            <Project projects={[...projects.slice(5, 9)]} />
          </div>
        </Page> */}

        {/* <Page>
          <div class="section">
            <h2 class="section-header">Projects</h2>
            <Project projects={[...projects.slice(9, 12)]} />
          </div>
        </Page> */}

        <Page>
          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-code"></i> &nbsp; Technical Skills
            </h2>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-database"></i> &nbsp; Databases&nbsp;{" "}
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(0, 9).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code"></i> &nbsp; Back-end
                Development&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(9, 18).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code"></i> &nbsp; Front-end
                Development&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(18, 37).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-credit-card"></i> &nbsp; Payment
                Integration&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(55, 60).map((s) => (
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
            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-brands fa-aws"></i> &nbsp; AWS Cloud Services&nbsp;{" "}
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(37, 55).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                Extra&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(60, 100).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-user-graduate"></i> &nbsp; EDUCATION
            </h2>

            <div class="education-item">
              <h3 class="degree">
                Master of Science in Information Technology (MSC IT)
              </h3>
              <p class="school">UKA TARSADIA UNIVERSITY</p>
              <p class="education-years">Sep 2012 - Oct 2017</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-hashtag"></i> &nbsp; Social
            </h2>

            <div class="contact-info" style={{ flexDirection: "row" }}>
              <div class="contact-item">
                <span>
                  <i class="fa-brands fa-github"></i>
                </span>
                <span>
                  {" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/vickymoditech/"
                  >
                    github.com/vickymoditech
                  </a>
                </span>
              </div>
              <div class="contact-item">
                <span>
                  <i class="fa-brands fa-linkedin"></i>
                </span>
                <span>
                  {" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/vicky-modi-a01885186"
                  >
                    vickymodi@linkedin
                  </a>
                </span>
              </div>
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
