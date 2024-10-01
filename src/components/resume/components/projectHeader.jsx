import React from "react";

const ProjectsHeader = ({ project }) => {
  return (
    <ul className="projects-header" style={{ paddingTop: "10px" }}>
      <li style={{ display: "flex", flexDirection: "column" }}>
        <div className="Experience_div">
          <div className="date mb-0 w_700">
            {project.id}.&nbsp;{project.title}
          </div>
        </div>
        <p className="semi-bold w_500" style={{ paddingLeft: "20px" }}>
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://vickymoditech.github.io/#/projectDetail/${project.id}`}
          >
            {project.title}
          </a>
        </p>
      </li>
    </ul>
  );
};

export default ProjectsHeader;
