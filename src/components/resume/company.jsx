import React, { Fragment } from "react";
import CompanyHeader from "./components/companyHeader";
// import Skills from "./components/Skills";
import Description from "./components/description";

const Company = ({
  company,
  isCompany = true,
  bulletStart = undefined,
  bulletEnd = undefined,
}) => {
  return (
    <Fragment>
      <div class="job">
        {isCompany && <CompanyHeader company={company} />}

        <p class="job-description">
          {/* <Skills skills={company.skills} /> */}
          <Description
            company={company}
            bulletStart={bulletStart}
            bulletEnd={bulletEnd}
          />
        </p>
      </div>
    </Fragment>
  );
};

export default Company;
