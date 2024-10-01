import React from "react";

const SideBar = ({ children }) => {
  return (
    <div className="resume_left">
      <div className="resume_content">{children}</div>
    </div>
  );
};

export default SideBar;
