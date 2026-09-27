import React from "react";

const About = () => (
  <header className="resume-intro">
    <div className="resume-intro-top">
      <div className="resume-name-block">
        <p className="eyebrow">Professional profile</p>
        <h1 className="resume-name">Vicky Modi</h1>
        <p className="resume-title">Lead Full-Stack Developer</p>
      </div>
      <address className="resume-contact" aria-label="Contact information">
        <a href="mailto:vickymoditech@gmail.com"><span>Email</span>vickymoditech@gmail.com</a>
        <a href="tel:+13658896562"><span>Phone</span>+1 (365) 889-6562</a>
        <a href="https://www.linkedin.com/in/vicky-modi-a01885186" target="_blank" rel="noreferrer"><span>LinkedIn</span>Profile</a>
        <a href="https://github.com/vickymoditech/" target="_blank" rel="noreferrer"><span>GitHub</span>Profile</a>
        <a href="https://www.youtube.com/@VickyModi123" target="_blank" rel="noreferrer"><span>YouTube</span>Study &amp; project videos</a>
        <span className="resume-location"><span>Location</span>Hamilton, Ontario</span>
      </address>
    </div>
    <div className="resume-profile-summary">
      <p className="eyebrow">Profile</p>
      <p className="resume-summary">
        Lead Full-Stack Developer with 8+ years building production software across hospitality, compliance, e-commerce, and fintech. Leads delivery across React applications, Node.js services, AWS infrastructure, and data systems. Experienced in workflow automation, performance optimization, and cross-functional technical leadership.
      </p>
    </div>
  </header>
);

export default About;
