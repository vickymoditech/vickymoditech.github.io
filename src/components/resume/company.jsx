import React, { Fragment } from "react";
import project from "../../data/projects.json";
import CompanyHeader from "./components/companyHeader";
import Skills from "./components/Skills";
import Description from "./components/description";
import ProjectsHeader from "./components/projectHeader";
import ProjectDescription from "./components/projectDescription";

const Company = ({ company, isProject = true, isCompany = true, min = 0 , max}) => {
  const projects = project.filter((p) => company.project.includes(p.id));
  console.log(max)
  const max1 = max ? max : projects.length

  console.log("==========",max1, company.id, projects)

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
        {isProject && <ProjectList project={projects} min={min} max={max1} />}
      </div>
    </Fragment>
  );
};

const ProjectList = ({ project, min, max }) => {
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

      {project.slice(min, max).map((p) => (
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
