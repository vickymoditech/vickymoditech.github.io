import React from "react";

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
    color: "brown",
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

const ProjectSkills = ({ skills }) => {
  return (
    <ul style={{ paddingLeft: "30px" }}>
      <li>
        <p style={style.skill_style}>
          <strong> Technologies : </strong>
          {skills.join(", ")}
        </p>
      </li>
    </ul>
  );
};

export default ProjectSkills;
