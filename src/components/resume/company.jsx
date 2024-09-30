import React from "react";
import CompanyHeader from "./components/companyHeader";
import Skills from "./components/Skills";
import Description from "./components/description";
import ProjectsHeader from "./components/projectHeader";
import ProjectDescription from "./components/projectDescription";

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

const Company = ({ company }) => {
  return (
    <React.Fragment>
      <CompanyHeader company={company} />
      <div className="info">
        <p className="mt-15">
          <Skills company={company} />
          <Description company={company} />
        </p>
        <React.Fragment>
        {/* <div
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
        </div> */}


        {/* <ProjectsHeader company={company} />
        <p className="mt-15">
          <Skills company={company} />
          <ProjectDescription company={company} />
        </p> */}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default Company;
