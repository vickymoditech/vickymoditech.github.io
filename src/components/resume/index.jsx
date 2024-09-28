import html2pdf from "html2pdf.js";
import React, { Fragment } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
import SideBar from "./side";
import company from "../../data/company.json";
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
            <div class="resume_item resume_info">
              <div class="title">
                <p class="bold">CONTACT</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div class="data">
                    A2-1004 Nakshatra Galaxia,
                    <br />
                    Adajan, Gujarat, Surat
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="data">
                    <a href="tel:+918401060120">+91 8401060120</a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="data">
                    <a href="mailto:vickymoditech@gmail.com">
                      vickymoditech@gmail.com
                    </a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-weebly"></i>
                  </div>
                  <div class="data">
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
            <div class="resume_item resume_skills">
              <div class="title">
                <p class="bold">skills</p>
              </div>
              <ul>
                <li style={style.gap_20}>
                  <div class="main_skill">Databases</div>

                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">SQL</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mysql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mongodb</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Postgresql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">SAML</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Front End</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">React</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Javascript</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Angular</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">JSP</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Html</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">CSS / SCSS</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Back-end</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">Node js</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">C#</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">ASP.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">vb.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">core.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Java hibernate</div>
                  <div class="skill_per">6 years</div>
                </li>
              </ul>
            </div>
          </SideBar>

          <div class="resume_right">
            <About />
            <div class="resume_item resume_work">
              <div class="title">
                <p class="bold w_700">Work Experience</p>
              </div>

              <div class="gyg-experience">
                {company.slice(0, 1).map((c) => (
                  <Company company={c} />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* page 2 */}
        <Page>
          <SideBar>
            <div class="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div class="main_skill">Databases</div>

                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">SQL</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mysql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mongodb</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Postgresql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">SAML</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Front End</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">React</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Javascript</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Angular</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">JSP</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Html</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">CSS / SCSS</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Back-end</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">Node js</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">C#</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">ASP.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">vb.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">core.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Java hibernate</div>
                  <div class="skill_per">6 years</div>
                </li>
              </ul>
            </div>

            <div class="resume_item resume_social">
              <div class="title">
                <p class="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fab fa-github"></i>
                  </div>
                  <div class="data">
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
                  <div class="icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="data">
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

          <div class="resume_right">
            <div class="resume_item resume_work">
              <div class="gyg-experience">
                {company.slice(1, 2).map((c) => (
                  <Company company={c} />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* page 3 */}
        <Page>
          <SideBar>
            <div class="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div class="main_skill">Databases</div>

                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">SQL</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mysql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mongodb</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Postgresql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">SAML</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Front End</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">React</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Javascript</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Angular</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">JSP</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Html</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">CSS / SCSS</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Back-end</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">Node js</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">C#</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">ASP.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">vb.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">core.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Java hibernate</div>
                  <div class="skill_per">6 years</div>
                </li>
              </ul>
            </div>
            <div class="resume_item resume_social">
              <div class="title">
                <p class="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fab fa-github"></i>
                  </div>
                  <div class="data">
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
                  <div class="icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="data">
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

          <div class="resume_right">
            <div class="resume_item resume_work">
              <div class="gyg-experience">
                {company.slice(2, 3).map((c) => (
                  <Company company={c} />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* page 3 */}
        <Page>
          <SideBar>
            <div class="resume_item resume_skills">
              <ul>
                <li style={style.gap_20}>
                  <div class="main_skill">Databases</div>

                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">SQL</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mysql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Mongodb</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Postgresql</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">SAML</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Front End</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">React</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Javascript</div>

                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Angular</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">JSP</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Html</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">CSS / SCSS</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li style={style.skill_divider}>
                  <div class="main_skill">Back-end</div>
                  <div class="skill_border"></div>
                </li>
                <li>
                  <div class="skill_name">Node js</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">C#</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">ASP.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">vb.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">core.net</div>
                  <div class="skill_per">6 years</div>
                </li>
                <li>
                  <div class="skill_name">Java hibernate</div>
                  <div class="skill_per">6 years</div>
                </li>
              </ul>
            </div>
            <div class="resume_item resume_social">
              <div class="title">
                <p class="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fab fa-github"></i>
                  </div>
                  <div class="data">
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
                  <div class="icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="data">
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

          <div class="resume_right">
            <div class="resume_item resume_work">
              {company.slice(3, 4).map((c) => (
                <Company company={c} />
              ))}
            </div>

            <div class="resume_item resume_education">
              <div class="title">
                <p class="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div class="date">Sep 2011 - Oct 2017</div>
                  <div class="info">
                    <p class="semi-bold">
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
      <button class="download" onClick={pdfDownload}>
        <i id="download-btn" class="fa-sharp fa-solid fa-circle-down"></i>
      </button>
    </Fragment>
  );
};

export default Resume;
