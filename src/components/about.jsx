import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  return (
    <div style={{ position: "relative" }}>
      <svg className="bgsvg" style={ {   fill: "#0f9ef5",
      minWidth: "100%",
      position: "absolute",
      display: "block",
      left: "50%",
      bottom: "-2px",
      transform: "translate(-50%, 0%)"}} viewBox="0 0 1900 255" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M96.016 253.468c48.962-11.242 89.2-4.236 138.952.003l370.368.25c54.098.263 86.253.186 96.465-.232 5.318-.218 8.457.393 9.728-.032 251.24-84.359 271.272-216.453 555.648-146.614 310.668 76.296 309.263-127.388 624.183-99.836 2.914.254 5.77.647 8.569 1.177.81.154.792 81.937-.056 245.35-1203.828.243-1805.113.22-1803.857-.066z" opacity=".3"></path><path d="M1899.757 254.716L.027 254.482v-5.492c4.076-3.483 12.153-6.702 24.232-9.657 325.048-79.535 401.147 35.427 614.935 7.433 213.788-27.995 315.273-195.467 623.457-89.979 308.185 105.488 313.58-175.972 628.57-148.414 4.1.36 6.936.933 8.505 1.721l.03 244.622z"></path><path d="M308.03 254.766c106.437-72.59 200.452-113.983 282.045-124.18 227.966-28.493 400.797 182.215 672.618 29.416 271.821-152.8 309.567-130.037 622.009-73.272 3.8.69 8.912 2.246 15.333 4.665l.029 163.65-1592.034-.28z" opacity=".2"></path></g></svg>
    <section
      className="w3-animate-top profile-section mobile-view"
      style={{ height: "calc(100vh - 152px)",zIndex: "9999" }}
    >
     
      <div className="profile-content">
        <div className="profile-details">
          <h1>VICKY MODI</h1>
          <h2>A Bit About Me</h2>
          <p style={{ textAlign: "justify", display: "flex" }}>
            I’m Vicky, your tech guru by day and a dedicated husband all the
            time! I’ve been coding up a storm, but my latest project? Mastering
            husband life! I’ve gone from tackling complex algorithms to solving
            the mystery of “what’s for dinner.” <br />I bring my signature
            brilliance to both the office and home.
            <br /> Known for my sharp tech skills and smooth moves in keeping
            the Wi-Fi and my partner’s patience running smoothly, I’m now
            juggling the roles of innovator and world-class husband.
            <br /> With my charm and humor, there’s no bug I can’t fix or chore
            I can’t “debug”!
          </p>
        </div>
        <div className="button-group">
          <span onClick={() => click("/resume")}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">My Resume</span>
            </button>
          </span>
          <span onClick={() => click("/projects")}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">My Projects</span>
            </button>
          </span>
        </div>
      </div>

      <div className="profile-image">
        <img src="/img/profile.jpg" alt="Profile" />
      </div>
     
    </section>
     
      </div>
  );
}

export default About;
