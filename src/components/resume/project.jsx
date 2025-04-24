import React, { Fragment } from "react";
import ProjectsHeader from "./components/projectHeader";
import ProjectDescription from "./components/projectDescription";
import ProjectSkills from "./components/projectSkills";

const Project = ({ projects }) => {
  if (!projects.length) return <h4> not found </h4>;

  return (
    <Fragment>
      {projects.map((p) => (
        <Fragment>
          <ProjectsHeader project={p} key={p.id} />
         <div style={{display: "flex", flexDirection: "column", gap: "10px", padding: "10px 0 30px"}}>
            <ProjectDescription description={p.description} />
            <ProjectSkills skills={p.technologies} />
            </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Project;
