import React from "react";

const Description = ({ company, bulletStart, bulletEnd }) => {
  const works =
    bulletStart !== undefined
      ? company.work.slice(bulletStart, bulletEnd)
      : company.work;

  return (
    <ul className="achievements">
      {works.map((work, index) => (
        <li key={`${company.id}-${index}`}>{work}</li>
      ))}
    </ul>
  );
};

export default Description;
