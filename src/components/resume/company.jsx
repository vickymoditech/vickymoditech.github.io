import React from "react";
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
      <div className="job">
        {isCompany && <CompanyHeader company={company} />}

        <div className="job-description">
          <Description
            company={company}
            bulletStart={bulletStart}
            bulletEnd={bulletEnd}
          />
        </div>
      </div>
  );
};

export default Company;
