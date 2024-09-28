import html2pdf from "html2pdf.js";
import React, { Fragment } from "react";
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

function Resume() {
  const pdfDownload = () => {
    window.scroll(0, 0);
    const element = document.getElementById("content"); // Select the container for all pages

    // Configure options for html2pdf
    const options = {
      margin: 0,
      filename: "vicky Modi.pdf",
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
        <div class="a4-page">
          <div class="resume">
            <div class="resume_left">
              <div class="resume_content">
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
              </div>
            </div>
            <div class="resume_right">
              <div class="resume_item1 resume_about">
                <div class="title profile_title">
                  <p class="profile_name">Vicky Modi</p>
                  <p style={style.subheading}>Full Stack Developer</p>
                </div>
              </div>
              <div class="resume_item resume_about">
                <div class="title">
                  <p class="bold">About Me</p>
                </div>
                <p>
                  I'm a Senior Full Stack Developer with 6+ years of experience
                  building web and mobile apps that scale. I work with
                  javaScript, typescript, Node.js, React.js, AWS serverless
                  lambda, and Python and I’m great with databases like
                  relational and non-relational Databases (MySQL, PostgreSQL,
                  DynamoDB and MongoDB). <br /> I’ve led projects from start to
                  finish, Improving performance (JS, FE , BE and DB query
                  optimization). I’m also skilled in implementing test cases,
                  CI/CD pipelines, adding real-time functionality and socket. I
                  love finding innovative solutions to make apps faster, more
                  secure, and more user-friendly!
                </p>
              </div>
              <div class="resume_item resume_work">
                <div class="title">
                  <p class="bold w_700">Work Experience</p>
                </div>
                <div class="gyg-experience">
                  <ul>
                    <li>
                      <div class="Experience_div">
                        <div class="date mb-0 w_700">
                          Senior Full Stack Developer (Remote)
                        </div>
                        <div class="date mb-0 w_400">April 2021 – Sep 2024</div>
                      </div>
                      <p class="semi-bold w_500">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://order.guzmanygomez.com.au"
                        >
                          Guzman y Gomez (Australia)
                        </a>
                      </p>
                      <div class="info">
                        <p class="mt-15">
                          <p style={style.skill_style}>
                            <strong> Skills : </strong>
                            javascript, typescript, Node.Js, React.js, Next.Js,
                            Redux, Jwt, AWS
                            (Cognito,lambda,cloud-Monitor,cloud-Watch,Secret
                            Manager,Simple Notification Service,S3 bucket,Store
                            parameter, RDS, EC), Axios, Mongodb, Mysql, Asp.net
                            and More...
                          </p>
                          <ul class="experience_info">
                            <li>
                              Acted as a Senior Node.js Developer in the scrum
                              team.
                            </li>
                            <li>
                              Developed, tested, deployed, and maintained
                              scalable web and mobile applications.
                            </li>
                            <li>
                              Maintained existing software systems by
                              identifying and correcting software defects.
                            </li>
                            <li>
                              Designed and implemented complex menu structures
                              for apps.
                            </li>
                            <li>
                              Built AWS step functions to sync product data from
                              the POS(TASK) system.
                            </li>
                            <li>
                              Designed/Implemented social authentication flow
                              using AWS Cognito (Google, Apple, Facebook).
                            </li>
                            <li>
                              Worked with AWS Lambda, MySQL, and AWS Cognito for
                              user management.
                            </li>
                            <li>
                              Developed order processing flows for external
                              vendors (Ubereats, Doordash, MenuLog, and
                              Deliveroo)
                            </li>
                            <li>
                              Implemented order processing and validating flow.
                            </li>
                            <li>Implemented offer/coupon flow.</li>
                            <li>Wrote unit tests.</li>
                          </ul>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="a4-page">
          <div class="resume">
            <div class="resume_left">
              <div class="resume_content">
                <div class="resume_item resume_skills">
                  <ul>
                    <li>
                      <div class="skill_name">Python Django</div>
                      <div class="skill_per">6 years</div>
                    </li>
                    <li>
                      <div class="skill_name">AWS</div>
                      <div class="skill_per">6 years</div>
                    </li>
                  </ul>
                  <div class="title">
                    <p style={style.margin_50} class="bold">
                      Languages's
                    </p>
                  </div>
                  <ul>
                    <li style={style.gap_20}>
                      <div class="skill_name">English, Hindi,Gujarati</div>
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
              </div>
            </div>
            <div class="resume_right">
              <div class="resume_item resume_work">
                <div class="gyg-experience">
                  <ul>
                    <li>
                      <div class="Experience_div">
                        <div class="date mb-0 w_700">
                          Senior Full Stack Developer (Remote)
                        </div>
                        <div class="date mb-0 w_400">April 2021 – Sep 2024</div>
                      </div>
                      <p class="semi-bold w_500">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://order.guzmanygomez.com.au"
                        >
                          Guzman y Gomez (Australia)
                        </a>
                      </p>
                      <div class="info">
                        <p class="mt-15">
                          <p style={style.skill_style}>
                            <strong> Skills : </strong>
                            javascript, typescript, Node.Js, React.js, Next.Js,
                            Redux, Jwt, AWS
                            (Cognito,lambda,cloud-Monitor,cloud-Watch,Secret
                            Manager,Simple Notification Service,S3 bucket,Store
                            parameter, RDS, EC), Axios, Mongodb, Mysql, Asp.net
                            and More...
                          </p>
                          <ul class="experience_info">
                            <li>
                              Acted as a Senior Node.js Developer in the scrum
                              team.
                            </li>
                            <li>
                              Developed, tested, deployed, and maintained
                              scalable web and mobile applications.
                            </li>
                            <li>
                              Maintained existing software systems by
                              identifying and correcting software defects.
                            </li>
                            <li>
                              Designed and implemented complex menu structures
                              for apps.
                            </li>
                            <li>
                              Built AWS step functions to sync product data from
                              the POS(TASK) system.
                            </li>
                            <li>
                              Designed/Implemented social authentication flow
                              using AWS Cognito (Google, Apple, Facebook).
                            </li>
                            <li>
                              Worked with AWS Lambda, MySQL, and AWS Cognito for
                              user management.
                            </li>
                            <li>
                              Developed order processing flows for external
                              vendors (Ubereats, Doordash, MenuLog, and
                              Deliveroo)
                            </li>
                            <li>
                              Implemented order processing and validating flow.
                            </li>
                            <li>Implemented offer/coupon flow.</li>
                            <li>Wrote unit tests.</li>
                          </ul>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="gyg-experience">
                  <div class="Experience_div" style={{ display: "contents" }}>
                    <div class="projectList mb-0 bold w_700">PROJECTS</div>
                    <div class="projectListInfo">
                      <p class="mt-15">
                        <ul class="experience_info">
                          <li style={style.list_style}>
                            <strong>
                              <a
                                rel="noreferrer"
                                href="https://creat.sg/"
                                target="_blank"
                              >
                                CREAT
                              </a>
                            </strong>
                            <p>
                              Our restaurant reservation app offers a seamless
                              and user-friendly experience, allowing diners to
                              easily book tables for breakfast, lunch, or
                              dinner. With a few taps, users can discover and
                              reserve their favorite restaurants, making dining
                              out a breeze.
                            </p>
                            <p>
                              <strong style={{ color: "#FFA500" }}>
                                Technologies : &nbsp;
                              </strong>
                              React Js, Javascript, Postgress, Node Js, Express
                              Js, Material Ui
                            </p>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="title">
                  <p style={style.marginTop_30} class="bold w_700">
                    Work Experience
                  </p>
                </div>
                <ul>
                  <li>
                    <div class="Experience_div">
                      <div class="date mb-0 w_700">
                        Senior Full Stack Developer
                      </div>
                      <div class="date mb-0 w_400">Oct 2018 – May 2021</div>
                    </div>
                    <p class="semi-bold w_500">Lanet Team Software Solution</p>
                    <div class="info">
                      <p class="mt-15">
                        <p style={style.skill_style}>
                          <strong> Skills: </strong> React JS , Next Js , Redux
                          Toolkit , Jwt , Axios , Node Js , Express Js , Mongodb
                          , Mysql
                        </p>
                        <ul class="experience_info">
                          <li>
                            Acted as a project lead across multiple initiatives,
                            responsible for end-to-end project management,
                            including requirement analysis, solution design,
                            development, testing, deployment, and maintenance.
                          </li>
                          <li>
                            Demonstrated proficiency in a wide range of
                            technologies including React, Node.js, Python, C#,
                            and various APIs (Stripe, Firebase, Mitto).
                          </li>
                          <li>
                            Ensured high standards of quality through rigorous
                            testing, code reviews, and documentation.
                          </li>
                          <li>
                            Worked closely with clients, business analysts, and
                            internal teams to translate business requirements
                            into technical solutions, ensuring alignment with
                            project goals.
                          </li>
                          <li>
                            Contributed to system enhancements and
                            optimizations, leveraging industry best practices
                            and innovative technologies.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="Experience_div">
                      <div class="date mb-0 w_700">Software Developer</div>
                      <div class="date mb-0 w_400">Sept 2017 – May 2018</div>
                    </div>
                    <p class="semi-bold w_500">
                      Codenvision software private limited
                    </p>
                    <div class="info">
                      <p class="mt-15">
                        <p style={style.skill_style}>
                          <strong> Skills: </strong>React JS , Jwt , Axios ,
                          Node Js , Express Js , Mongodb , Mysql
                        </p>

                        <ul class="experience_info">
                          <li>
                            Designed and developed scalable web applications
                            from scratch.
                          </li>
                          <li>
                            Integrated real-time functionalities using PubNub
                            and other socket technologies.
                          </li>
                          <li>
                            Worked with MySQL and MongoDB databases, optimizing
                            queries with indexing.
                          </li>
                          <li>
                            Built APIs, implemented business requirements, and
                            conducted software quality testing.
                          </li>
                          <li>
                            Managed the full lifecycle of applications, from
                            deployment to maintenance, and handled security
                            measures.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="a4-page">
          <div class="resume">
            <div class="resume_left"></div>
            <div class="resume_right">
              <div class="resume_item resume_education">
                <div class="title">
                  <p class="bold">Education</p>
                </div>
                <ul>
                  <li>
                    <div class="date">Sep 2011 - Oct 2017</div>
                    <div class="info">
                      <p class="semi-bold">
                        Master of Science in Information Technology (Integrated
                        MSC IT degree)
                      </p>
                      <p>UKA TARSADIA UNIVERSITY</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="download" onClick={pdfDownload}>
        <i id="download-btn" class="fa-sharp fa-solid fa-circle-down"></i>
      </button>
    </Fragment>
  );
}

export default Resume;
