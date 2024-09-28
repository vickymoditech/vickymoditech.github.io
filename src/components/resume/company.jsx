import React from "react";

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
    <ul>
      <li>
        <div class="Experience_div">
          <div class="date mb-0 w_700">{company.designation}</div>
          <div class="date mb-0 w_400">{company.date}</div>
        </div>
        <p class="semi-bold w_500">
          <a rel="noreferrer" target="_blank" href={company.url}>
            {company.name}
          </a>
        </p>
        <div class="info">
          <p class="mt-15">
            <p style={style.skill_style}>
              <strong> Skills : </strong>
              {company.skills.join(", ")}
            </p>
            <ul class="experience_info">
              {company.work.map((work) => (
                <li> {work} </li>
              ))}
            </ul>
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Company;
