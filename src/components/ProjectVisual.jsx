import React from "react";
import "../App.css";

function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual project-visual--${project.visualTheme}`}
      role="img"
      aria-label={`${project.companyName}: ${project.visualSubtitle}`}
    >
      <p className="project-visual-kicker">Lead project <span>/</span> End-to-end build</p>
      <p className="project-visual-wordmark">{project.visualLabel}</p>
      <span className="project-visual-rule" aria-hidden="true" />
      <p className="project-visual-title">{project.visualSubtitle}</p>
      <p className="project-visual-footer">Lead end-to-end implementation</p>
    </div>
  );
}

export default ProjectVisual;