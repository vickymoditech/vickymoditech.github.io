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
              <i class="fa-brands fa-github"></i>
            </span>
            <span>
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/vicky-modi-a01885186"
              >
                vickymodi@linkedin
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
          Senior Full Stack Developer with over 8 years of experience delivering
          robust, scalable, and secure web and mobile applications across global
          markets including Singapore, Australia, the UK, and the US. Skilled in
          both frontend (React.js, Next.js, Angular, Vue) and backend (Node.js,
          NestJS, Python, Java, ASP.NET) development, with deep expertise in
          microservices and monolithic architectures. Proven ability to lead
          projects from concept to production in agile environments, with
          hands-on experience in AWS (Cognito, Lambda, EC2, S3, RDS), database
          design (PostgreSQL, MySQL, MongoDB), DevOps (CI/CD, Docker, GitHub
          Actions), and secure real-time communication (WebSockets, SQS, Kafka,
          RabbitMQ). Known for implementing clean code practices, mentoring
          teams, integrating payment systems, and aligning technical solutions
          with business goals. Passionate about solving real-world problems
          through high-quality, performance-optimized, and user-centric
          software.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
