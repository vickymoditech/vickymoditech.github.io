import React from "react";

const CompanyHeader = ({ company }) => {
  return (
    <ul className="CompanyHeader top-padding">
      <li style={{ display: "flex", flexDirection: "column" }}>
        <div class="Experience_div">
          <div class="date mb-0 w_700">{company.designation}</div>
          <div class="date mb-0 w_400">{company.date}</div>
        </div>
        <p class="semi-bold w_500">
          <a rel="noreferrer" target="_blank" href={company.url}>
            {company.name}
          </a>
        </p>
      </li>
    </ul>
  );
};

export default CompanyHeader;
