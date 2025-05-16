import React from "react";
import Player from "lottie-react";
import animationData from "../assets/404-animation.json"; 

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
       <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "300px", width: "300px" }}
      />
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;