import React from "react";

const Page = ({ children }) => {
  return (
    <div class="a4-page">
      <div class="resume">{children}</div>
    </div>
  );
};

export default Page;
