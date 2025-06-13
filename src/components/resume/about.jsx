import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div class="headers">
        <div>
          <h1 class="name">Vicky Modi</h1>
          <p class="title">
            Senior Full Stack Developer (Node | Nest | React | Next | Aws | Java
            | Python)
          </p>
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
          I'm a Senior Full Stack Developer with over 8+ years of experience
          building scalable, high-performance web and mobile applications. I
          specialize in JavaScript, TypeScript, Node.js (NestJS), React.js
          (Next.js), Monolithic and Microservices architecture (Lambda, Step
          Functions, Cognito).
          <br />
          I'm proficient in designing RESTful APIs, microservices, and working
          with both relational and NoSQL databases. Passionate about performance
          optimization, CI/CD integration, web-socket, test-driven development
          and AI development, I have a strong background in cloud services (AWS,
          Azure) and DevOps practices.
          <br />I thrive in fast-paced environments and love delivering secure,
          scalable, and user-centric applications.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
