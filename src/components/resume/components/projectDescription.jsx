import React from "react";

const ProjectDescription = ({ description }) => {
  return (
    <ul className="achievements" style={{ paddingBottom: 0, paddingTop: 0 }}>
      <li>{description}</li>
    </ul>
  );
};

export default ProjectDescription;
