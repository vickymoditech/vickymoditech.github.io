import React, { Fragment } from "react";
import ProjectsHeader from "./components/projectHeader";
import ProjectDescription from "./components/projectDescription";
import ProjectSkills from "./components/projectSkills";

const Project = ({ projects }) => {

  if (!projects.length) return <h4> not found </h4>;

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 30px 0",
        }}
      >
        <p style={{ fontSize: "18px" }} className="bold w_700">
          Projects
        </p>
        <hr style={{ width: "100%" }} />
      </div>

      {projects.map((p) => (
        <Fragment>
          <ProjectsHeader project={p} key={p.id} />
          <p className="mt-15" style={{ paddingLeft: "30px" }}>
            <ProjectDescription description={p.description} />
            <ProjectSkills skills={p.technologies} />
          </p>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Project;
