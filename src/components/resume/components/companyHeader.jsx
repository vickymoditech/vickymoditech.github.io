import React from "react";

const CompanyHeader = ({ company }) => {
  return (
    <ul className="CompanyHeader top-padding">
      <li style={{ display: "flex", flexDirection: "column" }}>
        <div className="Experience_div">
          <div className="date mb-0 w_700">{company.designation}</div>
          <div className="date mb-0 w_400">{company.date}</div>
        </div>
        <p className="semi-bold w_500">
          <a rel="noreferrer" target="_blank" href={company.url}>
            {company.name}
          </a>
        </p>
      </li>
    </ul>
  );
};

export default CompanyHeader;
