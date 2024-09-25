import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <p>Phone</p>
          <p>
            <a href="tel:+918401060120">+91 8401060120</a>
          </p>
        </div>
        <div className="footer-info">
          <p>Email</p>
          <p>
            <a href="mailto:vickymoditech@gmail.com">vickymoditech@gmail.com</a>
          </p>
        </div>
        <div className="footer-social">
          <p>Follow Me</p>
          <div className="social-logo">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
