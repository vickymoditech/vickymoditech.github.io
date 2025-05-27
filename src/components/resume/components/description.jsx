import React from "react";

const Description = ({ company, bulletStart, bulletEnd }) => {
  const works =
    bulletStart !== undefined
      ? company.work.slice(bulletStart, bulletEnd)
      : company.work;

  console.log(company.work.slice(bulletStart, bulletEnd));
  return (
    <ul class="achievements">
      {works.map((work) => (
        <li> {work} </li>
      ))}
    </ul>
  );
};

export default Description;
