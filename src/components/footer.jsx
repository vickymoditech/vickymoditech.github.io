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
            <a href="#no" target="_blank" rel="noopener noreferrer">
              <i
                style={{ color: "#0068f0", fontSize: "25px" }}
                href=""
                className="fab fa-linkedin"
              ></i>
            </a>
            <a
              href="https://github.com/vickymoditech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ fontSize: "25px" }} className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
