import React, { Fragment } from "react";

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

const About = () => {
  return (
    <Fragment>
      <div class="headers">
        <div>
        <h1 class="name">Vicky Modi</h1>
        <p class="title">Senior Full-Stack Developer</p>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <span><i class="fa-solid fa-phone"></i></span>
            <span><a href="tel:+918401060120">+91 8401060120</a></span>
          </div>
          <div class="contact-item">
            <span><i class="fa-solid fa-envelope"></i></span>
            <span> <a href="mailto:vickymoditech@gmail.com">
                      vickymoditech@gmail.com
                    </a></span>
          </div>
          <div class="contact-item">
            <span><i class="fa-solid fa-link"></i></span>
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
        </div>
      </div>

      <div class="section">
        <h2 class="section-header">
        <i class="fa-solid fa-address-card"></i> &nbsp;
          About Me</h2>
        <p>
          I'm a Senior Full Stack Developer with 6+ years of experience building
          web and mobile apps that scale. I work with javaScript, typescript,
          Node.js, React.js, AWS serverless lambda, and Python and I’m great
          with databases like relational and non-relational Databases (MySQL,
          PostgreSQL, DynamoDB and MongoDB). <br /> I’ve led projects from start
          to finish, Improving performance (JS, FE , BE and DB query
          optimization). I’m also skilled in implementing test cases, CI/CD
          pipelines, adding real-time functionality and socket. I love finding
          innovative solutions to make apps faster, more secure, and more
          user-friendly!
        </p>
      </div>
    </Fragment>
  );
};

export default About;
