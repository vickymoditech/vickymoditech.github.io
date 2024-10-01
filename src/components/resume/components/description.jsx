import React from "react";

const Description = ({ company }) => {
  return (
    <ul className="experience_info" style={{ padding: "10px 0 0 60px" }}>
      {company.work.map((work) => (
        <li> {work} </li>
      ))}
    </ul>
  );
};

export default Description;
