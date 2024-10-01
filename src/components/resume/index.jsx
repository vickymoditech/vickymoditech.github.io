import html2pdf from "html2pdf.js";
import React, { Fragment, useEffect } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
import SideBar from "./side";
import company from "../../data/company.json";
import projects from "../../data/projects.json";
import skill from "../../data/skills.json";
import Project from "./project";
import "./resume.css";

const style = {
  skill_divider: {
    gap: "20px",
    marginTop: "25px",
  },
  gap_20: {
    gap: "20px",
  },
  profile_margin: {
    marginBottom: 0,
  },
  skill_style: {
    marginTop: "3px",
    marginBottom: "3px",
    color: "#FFA500",
  },
  margin_50: {
    marginTop: "50px",
  },
  margin_30: {
    marginTop: "30px",
  },
  paddingLeft_50: {
    paddingLeft: "50px",
  },
  list_style: {
    marginBottom: "15px",
  },
  subheading: {
    fontWeight: "bold",
  },
};

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
      <div id="content">
        {/* page 1 */}
        <Page>
          <SideBar>
            <div className="resume_item resume_info">
              <div className="title" style={{paddingBottom:"10px"}}>
                <p className="bold">CONTACT</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="data">
                    A2-1004 Nakshatra Galaxia,
                    <br />
                    Adajan, Gujarat, Surat
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="data">
                    <a href="tel:+918401060120">+91 8401060120</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="data">
                    <a href="mailto:vickymoditech@gmail.com">
                      vickymoditech@gmail.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-weebly"></i>
                  </div>
                  <div className="data">
                    <a
                      href="https://vickymoditech.github.io"
                      rel="noreferrer"
                      target="_blank"
                    >
                      vickymoditech.github.io
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title" style={{paddingBottom:"10px"}}>
                <p className="bold">skills</p>
              </div>
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(0, 8).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(8, 17).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Front-end</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(17, 22).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}
              </ul>
            </div>
          </SideBar>

          <div className="resume_right">
            <About />
            <div className="resume_item resume_work">
              <div className="title">
                <p className="bold w_700">Work Experience</p>
              </div>

              <div className="gyg-experience top-padding">
                {company.slice(0, 1).map((c, index) => (
                  <Company company={c} key={index} />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* page 2 */}
        <Page>
          <SideBar>
            <div className="resume_item resume_skills">
              <ul>
                {skill.slice(22, 23).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">AWS</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(23, 32).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Payment Integration</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(32, 34).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Extra</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(34, 38).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="data">
                    <p>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/vickymoditech/"
                      >
                        github.com/vickymoditech
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="data">
                    <p>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/vicky-modi-a01885186"
                      >
                        vickymodi@linkedin
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </SideBar>

          <div className="resume_right">
            <div className="resume_item resume_work">
              <div className="gyg-experience">
                {company.slice(1, 2).map((c, index) => (
                  <Company company={c} key={index} />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* page 3 */}
        <Page>
          <SideBar/>
          
          <div className="resume_right">
            <div className="resume_item resume_work">
              <div className="gyg-experience top-padding">
                {company.slice(2, 3).map((c, index) => (
                  <Company company={c} key={index} />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* page 4 */}
        <Page>
          <SideBar/>

          <div className="resume_right">
            <div className="resume_item resume_work">
              {company.slice(3, 4).map((c, index) => (
                <Company company={c} key={index} />
              ))}

              <Project projects={[...projects.slice(0, 2)]} />
            </div>
          </div>
        </Page>

        {/* page 5 */}
        <Page>
          <SideBar/>

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(2, 6)]} />
            </div>
          </div>
        </Page>

        {/* page 6 */}
        <Page>
          <SideBar/>
          
          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(6, 10)]} />
            </div>
          </div>
        </Page>

        {/* page 7 */}
        <Page>
          <SideBar/>

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(10, 11)]} />
            </div>

            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div className="date">Sep 2011 - Oct 2017</div>
                  <div className="info">
                    <p className="semi-bold">
                      Master of Science in Information Technology (MSC IT)
                    </p>
                    <p>UKA TARSADIA UNIVERSITY</p>
                  </div>
                </li>
              </ul>
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
