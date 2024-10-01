import html2pdf from "html2pdf.js";
import React, { Fragment, useEffect, useState } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
import SideBar from "./side";
import company from "../../data/company.json";
import projects from "../../data/projects";
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
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    setProjectList([...projects.sort((a, b) => a.id - b.id)]);
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

  console.log("outerLink", projectList);

  return (
    <Fragment>
      <div id="content">
        {/* page 1 */}
        <Page>
          <SideBar>
            <div className="resume_item resume_info">
              <div className="title">
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
              <div className="title">
                <p className="bold">skills</p>
              </div>
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>

                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">SQL</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mysql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mongodb</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Postgresql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">SAML</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Front End</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Javascript</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Angular</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">JSP</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Html</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">CSS / SCSS</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">Node js</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">C#</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">ASP.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">vb.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">core.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Java hibernate</div>
                  <div className="skill_per">6 years</div>
                </li>
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
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>

                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">SQL</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mysql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mongodb</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Postgresql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">SAML</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Front End</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Javascript</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Angular</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">JSP</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Html</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">CSS / SCSS</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">Node js</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">C#</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">ASP.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">vb.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">core.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Java hibernate</div>
                  <div className="skill_per">6 years</div>
                </li>
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
          <SideBar>
            <div className="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>

                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">SQL</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mysql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mongodb</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Postgresql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">SAML</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Front End</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Javascript</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Angular</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">JSP</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Html</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">CSS / SCSS</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">Node js</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">C#</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">ASP.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">vb.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">core.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Java hibernate</div>
                  <div className="skill_per">6 years</div>
                </li>
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
          <SideBar>
            <div className="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>

                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">SQL</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mysql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mongodb</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Postgresql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">SAML</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Front End</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Javascript</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Angular</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">JSP</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Html</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">CSS / SCSS</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">Node js</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">C#</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">ASP.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">vb.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">core.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Java hibernate</div>
                  <div className="skill_per">6 years</div>
                </li>
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
              {company.slice(3, 4).map((c, index) => (
                <Company company={c} key={index} />
              ))}

              <Project projects={[...projectList]} min={0} max={10} />
            </div>
          </div>
        </Page>

        {/* page 5 */}
        <Page>
          <SideBar>
            <div className="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>

                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">SQL</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mysql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mongodb</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Postgresql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">SAML</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Front End</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Javascript</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Angular</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">JSP</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Html</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">CSS / SCSS</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">Node js</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">C#</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">ASP.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">vb.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">core.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Java hibernate</div>
                  <div className="skill_per">6 years</div>
                </li>
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
              {/* <Project projects={projects} min={2} max={3} /> */}
            </div>
          </div>
        </Page>

        {/* page 6 */}
        {/* <Page>
          <SideBar>
            <div className="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>

                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">SQL</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mysql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Mongodb</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Postgresql</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">SAML</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Front End</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">React</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Javascript</div>

                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Angular</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">JSP</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Html</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">CSS / SCSS</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>
                <li>
                  <div className="skill_name">Node js</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">C#</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">ASP.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">vb.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">core.net</div>
                  <div className="skill_per">6 years</div>
                </li>
                <li>
                  <div className="skill_name">Java hibernate</div>
                  <div className="skill_per">6 years</div>
                </li>
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
              {company.slice(3, 4).map((c) => (
                <Company company={c} />
              ))}
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
        </Page> */}
      </div>
      <button className="download" onClick={pdfDownload}>
        <i id="download-btn" className="fa-sharp fa-solid fa-circle-down"></i>
      </button>
    </Fragment>
  );
};

export default Resume;
