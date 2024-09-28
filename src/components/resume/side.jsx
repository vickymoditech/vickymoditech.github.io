import React from "react";

const SideBar = ({ children }) => {
  return (
    <div class="resume_left">
      <div class="resume_content">{children}</div>
    </div>
  );
};

export default SideBar;
