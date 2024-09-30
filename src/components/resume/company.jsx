import React, { Fragment } from "react";
import project from "../../data/projects.json";
import CompanyHeader from "./components/companyHeader";
import Skills from "./components/Skills";
import Description from "./components/description";
import ProjectsHeader from "./components/projectHeader";
import ProjectDescription from "./components/projectDescription";

const Company = ({ company, isProject = true, isCompany = true }) => {
  const projects = project.filter((p) => company.project.includes(p.id));

  return (
    <Fragment>
      {isCompany && <CompanyHeader company={company} />}
      <div className="info">
        {isCompany && (
          <p className="mt-15">
            <Skills skills={company.skills} />
            <Description company={company} />
          </p>
        )}
        {isProject && <ProjectList project={projects} />}
      </div>
    </Fragment>
  );
};

const ProjectList = ({ project }) => {
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

      {project.map((p) => (
        <Fragment>
          <ProjectsHeader project={p} />
          <p className="mt-15">
            <ProjectDescription description={p.description} />
            <Skills skills={p.technologies} />
          </p>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Company;
