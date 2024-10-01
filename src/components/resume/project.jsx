import React, { Fragment } from "react";
import project from "../../data/projects.json";
import CompanyHeader from "./components/companyHeader";
import Skills from "./components/Skills";
import Description from "./components/description";
import ProjectsHeader from "./components/projectHeader";
import ProjectDescription from "./components/projectDescription";
import ProjectSkills from "./components/projectSkills";

const Project = ({ company }) => {
  const projects = project.filter((p) => company.project.includes(p.id));

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
        <p style={{ fontSize: "18px" }} class="bold w_700">
          Projects
        </p>
        <hr style={{ width: "100%" }} />
      </div>

      {projects.map((p) => (
        <Fragment>
          <ProjectsHeader project={p} />
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
