import React from "react";

const CompanyHeader = ({ company }) => {
  return (
    <>
      <h3 className="job-title">{company.designation}</h3>
      <div className="job-meta">
        <span>
          <a rel="noreferrer" target="_blank" href={company.url}>
            {company.name}
          </a>
        </span>

        <span><i className="fa-solid fa-calendar-days" aria-hidden="true"></i>&nbsp;{company.date}</span>
      </div>
    </>
  );
};

export default CompanyHeader;
