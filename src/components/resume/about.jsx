import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div class="headers">
        <div>
          <h1 class="name">Vicky Modi</h1>
          <p class="title">Senior Full Stack Developer</p>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span>
              <a href="mailto:vickymoditech@gmail.com">
                vickymoditech@gmail.com
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-link"></i>
            </span>
            <span>
              <a
                href="https://vickymoditech.github.io"
                rel="noreferrer"
                target="_blank"
              >
                vickymoditech.github.io
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span>
              208-512 Mohawk Road East, Hamilton, Ontario, L8V 2J2, Canada
            </span>
          </div>
        </div>
      </div>
      <div class="section">
        <h2 class="section-header">
          <i class="fa-solid fa-address-card"></i> &nbsp; About Me
        </h2>
        <p>
          Senior Full Stack Developer with 8+ years of experience in building
          scalable, high-performance web and mobile applications. Strong in both
          Frontend (React.js, Next.js) and Backend (Node.js/NestJS, Java,
          Python) development. Experienced in designing monolithic and
          microservices architectures, system and database design, and
          performance optimization. Proficient with AWS, Docker, Kubernetes,
          CI/CD pipelines, and real-time communication (WebSockets). Passionate
          about clean code, secure development, and delivering user-centric
          solutions in fast-paced environments.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
