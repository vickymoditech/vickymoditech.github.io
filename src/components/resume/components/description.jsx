import React from "react";

const Description = ({ company }) => {
  return (
    <ul class="achievements">
      {company.work.map((work) => (
        <li> {work} </li>
      ))}
    </ul>
  );
};

export default Description;
