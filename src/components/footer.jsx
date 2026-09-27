import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-kicker">Contact</p>
          <a className="footer-email" href="mailto:vickymoditech@gmail.com">
            vickymoditech@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/vicky-modi-a01885186" target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/vickymoditech/" target="_blank" rel="noopener noreferrer">GitHub profile <span aria-hidden="true">↗</span></a>
          <a href="https://www.youtube.com/@VickyModi123" target="_blank" rel="noopener noreferrer">YouTube · study &amp; projects <span aria-hidden="true">↗</span></a>
        </div>
        <p className="footer-note">Portfolio of Vicky Modi · Lead Full-Stack Developer · Hamilton, Ontario</p>
      </div>
    </footer>
  );
}

export default Footer;
