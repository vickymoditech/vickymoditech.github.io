import React from "react";

const ProjectDescription = ({ description }) => {
  return (
    <ul class="experience_info" style={{ padding: "10px 0 0 20px" }}>
      {description}
    </ul>
  );
};

export default ProjectDescription;
