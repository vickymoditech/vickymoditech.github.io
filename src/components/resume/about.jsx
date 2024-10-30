import React, { Fragment } from "react";

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

const About = () => {
  return (
    <Fragment>
      {/* name */}
      <div className="resume_item1 resume_about">
        <div className="title profile_title">
          <p className="profile_name">Vicky Modi</p>
          <p style={style.subheading}>Senior Full-Stack Developer</p>
        </div>
      </div>

      {/* about me */}
      <div className="resume_item resume_about">
        <div className="title">
          <p className="bold">About Me</p>
        </div>
        <p className="top-padding">
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
