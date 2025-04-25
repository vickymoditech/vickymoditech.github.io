import React from "react";

const ProjectsHeader = ({ project }) => {
  return (
    <>
    <h3 class="job-title">{project.id}.&nbsp;{project.title}</h3>
      {/* <p class="company">Harvey</p> */}
      <div class="job-meta" style={{ marginLeft: "30px" }}>
        <span>
        <a
            rel="noreferrer"
            target="_blank"
            href={`https://vickymoditech.github.io/#/projectDetail/${project.id}`}
          >
            Read More
          </a>
        </span>
      </div>
    </>
  );
};

export default ProjectsHeader;
