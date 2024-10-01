import React from "react";

const Page = ({ children }) => {
  return (
    <div className="a4-page">
      <div className="resume">{children}</div>
    </div>
  );
};

export default Page;
