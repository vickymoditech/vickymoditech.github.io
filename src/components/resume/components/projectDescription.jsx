import React from "react";

const ProjectDescription = ({ description }) => {
  return (
    // <ul className="experience_info" style={{ padding: "10px 0 0 20px" }}>
    //   {description}
    // </ul>

    <ul class="achievements" style={{paddingBottom: 0, paddingTop: 0}}>
      <li> {description} </li>
    </ul>
  );
};

export default ProjectDescription;
