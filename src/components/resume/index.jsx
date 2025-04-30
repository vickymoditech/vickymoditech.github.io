import html2pdf from "html2pdf.js";
import React, { Fragment, useEffect } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
// import SideBar from "./side";
import company from "../../data/company.json";
import projects from "../../data/projects.json";
import skill from "../../data/skills.json";
import Project from "./project";
import "./resume.css";

// const style = {
//   skill_divider: {
//     gap: "20px",
//     marginTop: "25px",
//   },
//   gap_20: {
//     gap: "20px",
//   },
//   profile_margin: {
//     marginBottom: 0,
//   },
//   skill_style: {
//     marginTop: "3px",
//     marginBottom: "3px",
//     color: "#FFA500",
//   },
//   margin_50: {
//     marginTop: "50px",
//   },
//   margin_30: {
//     marginTop: "30px",
//   },
//   paddingLeft_50: {
//     paddingLeft: "50px",
//   },
//   list_style: {
//     marginBottom: "15px",
//   },
//   subheading: {
//     fontWeight: "bold",
//   },
// };

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
      <div id="content" style={{display: "flex", flexDirection: "column", gap: "5px"}}>
        <Page>
          <About />
          <div class="section">
            <h2 class="section-header">
            <i class="fa-solid fa-briefcase"></i> &nbsp;
              Work Experience</h2>
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

        {/* <Page>
          <div class="section">
            {company.slice(2, 3).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page> */}

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Work Experience</h2> */}
            {company.slice(3, 4).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
          <div class="section">
            <h2 class="section-header">
            <i class="fa-solid fa-diagram-project"></i> &nbsp;
              Projects</h2>
            <Project projects={[...projects.slice(0, 1)]} />
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Projects</h2> */}
            <Project projects={[...projects.slice(1, 5)]} />
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Projects</h2> */}
            <Project projects={[...projects.slice(5, 9)]} />
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Projects</h2> */}
            <Project projects={[...projects.slice(9, 12)]} />
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <h2 class="section-header">Projects</h2> */}
            <Project projects={[...projects.slice(12, 13)]} />
            <div className="see-more">

            <a
            rel="noreferrer"
            target="_blank"
            href="https://vickymoditech.github.io/#/projects"
          >
            See More Project &nbsp; <i class="fa-solid fa-angles-right"></i>
          </a>
            </div>
          </div>

         

          <div class="section">
            <h2 class="section-header">
            <i class="fa-solid fa-code"></i> &nbsp; Technical Skills</h2>

            <div class="skills-lists">
              <div className="main_skill">
              <i class="fa-solid fa-database"></i> &nbsp;
                Databases&nbsp;: <div className="line-div"></div></div>
              <div class="skills-list">
                {skill.slice(0, 7).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
              <i class="fa-solid fa-laptop-code"></i> &nbsp;
                Back-end Development&nbsp;: <div className="line-div"></div></div>
              <div class="skills-list">
                {skill.slice(8, 16).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
              <i class="fa-solid fa-laptop-code"></i> &nbsp;
                Front-end Development&nbsp;: <div className="line-div"></div></div>
              <div class="skills-list">
                {skill.slice(16, 27).map((s) => (
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
          <i class="fa-solid fa-code"></i> &nbsp; Technical Skills</h2>

           

            <div class="skills-lists">
              <div className="main_skill">
              <i class="fa-brands fa-aws"></i> &nbsp;
                AWS Cloud Services&nbsp;: <div className="line-div"></div></div>
              <div class="skills-list">
                {skill.slice(27, 37).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
              <i class="fa-solid fa-credit-card"></i> &nbsp;
                Payment Integration&nbsp;: <div className="line-div"></div></div>
              <div class="skills-list">
                {skill.slice(37, 39).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">Extra&nbsp;: <div className="line-div"></div></div>
              <div class="skills-list">
                {skill.slice(39, 50).map((s) => (
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
            <i class="fa-solid fa-user-graduate"></i> &nbsp;
              EDUCATION</h2>

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
            <i class="fa-solid fa-hashtag"></i> &nbsp;
              Social</h2>

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

        {/* <div class="footer">
          <span>www.enhancv.com</span>
          <span>Powered by Enhancv</span>
        </div> */}
      </div>

      <div>
        {/* page 1 */}
        {/* <Page>
          <SideBar>
            <div className="resume_item resume_info">
              <div className="title" style={{ paddingBottom: "10px" }}>
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
              <div className="title" style={{ paddingBottom: "10px" }}>
                <p className="bold">skills</p>
              </div>
              <ul>
                <li style={style.gap_20}>
                  <div className="main_skill">Databases</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(0, 7).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Back-end</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(8, 16).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Front-end</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(16, 24).map((s) => (
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
        </Page> */}

        {/* page 2 */}
        {/* <Page>
          <SideBar>
            <div className="resume_item resume_skills">
              <ul>
                {skill.slice(24, 27).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">AWS</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(27, 37).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Payment Integration</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(37, 39).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}

                <li style={style.skill_divider}>
                  <div className="main_skill">Extra</div>
                  <div className="skill_border"></div>
                </li>

                {skill.slice(39, 50).map((s) => (
                  <li>
                    <div className="skill_name">{s.name}</div>
                    <div className="skill_per">{s.year} years</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="resume_item resume_social">
              <div className="title" style={{ paddingBottom: "10px" }}>
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
        </Page> */}

        {/* page 3 */}
        {/* <Page>
          <SideBar />
          <div className="resume_right">
            <div className="resume_item resume_work">
              <div className="gyg-experience top-padding">
                {company.slice(2, 3).map((c, index) => (
                  <Company company={c} key={index} />
                ))}
              </div>
            </div>
          </div>
        </Page> */}

        {/* page 4 */}
        {/* <Page>
          <SideBar />

          <div className="resume_right">
            <div className="resume_item resume_work">
              {company.slice(3, 4).map((c, index) => (
                <Company company={c} key={index} />
              ))}

              <Project projects={[...projects.slice(0, 2)]} />
            </div>
          </div>
        </Page> */}

        {/* page 5 */}
        {/* <Page>
          <SideBar />

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(0, 3)]} />
            </div>
          </div>
        </Page> */}

        {/* page 6 */}
        {/* <Page>
          <SideBar />

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(3, 6)]} />
            </div>
          </div>
        </Page> */}

        {/* page 7 */}
        {/* <Page>
          <SideBar />

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(6, 9)]} />
            </div>
          </div>
        </Page> */}

        {/* <Page>
          <SideBar />

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(9, 12)]} />
            </div>

            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div className="date">Sep 2012 - Oct 2017</div>
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

        {/* <Page>
          <SideBar />

          <div className="resume_right">
            <div className="resume_item resume_work">
              <Project projects={[...projects.slice(12, 13)]} />
            </div>

            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div className="date">Sep 2012 - Oct 2017</div>
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
