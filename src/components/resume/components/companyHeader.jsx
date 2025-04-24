import React from "react";

const CompanyHeader = ({ company }) => {
  return (
    <>
      <h3 class="job-title job-titles">{company.designation}</h3>
      {/* <p class="company">Harvey</p> */}
      <div class="job-meta">
        <span>
          <a rel="noreferrer" target="_blank" href={company.url}>
            {company.name}
          </a>
        </span>

        <span><i class="fa-solid fa-calendar-days"></i>&nbsp;{company.date}</span>
      </div>
    </>
  );
};

export default CompanyHeader;
