import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      {/* <!-- Diagonal line decoration --> */}
      <div className="diagonal-line"></div>

      {/* <!-- Header section --> */}
      <header className="header_div">
        <h1 className="greeting">
          Hello,
          <br />
          Vicky Modi
        </h1>
      </header>

      {/* <!-- Main content --> */}
      <main className="content">
        {/* <!-- Profile image --> */}
        <div className="profile-image">
          <img src="/img/profile.jpg" alt="Profile" width={300} height={400} />
        </div>

        {/* <!-- About section --> */}
        <div className="about" style={{ padding: "10px" }}>
          <h2>About me</h2>
          <p>
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
      </main>
    </div>
  );
}

export default About;
