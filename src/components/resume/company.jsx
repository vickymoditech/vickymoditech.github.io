import React, { Fragment } from "react";
import CompanyHeader from "./components/companyHeader";
// import Skills from "./components/Skills";
import Description from "./components/description";

const Company = ({ company, isCompany = true }) => {
  return (
    <Fragment>
      <div class="job">
      {isCompany && <CompanyHeader company={company} />}
      {isCompany && (
          <p class="job-description">
            {/* <Skills skills={company.skills} /> */}
            <Description company={company} />
          </p>
        )}
        </div>
    </Fragment>
  );
};

export default Company;
