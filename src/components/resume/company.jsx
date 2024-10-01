import React, { Fragment } from "react";
import CompanyHeader from "./components/companyHeader";
import Skills from "./components/Skills";
import Description from "./components/description";

const Company = ({ company, isCompany = true }) => {
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
      </div>
    </Fragment>
  );
};

export default Company;
