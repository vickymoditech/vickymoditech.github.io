import React from "react";
// import Loading from "../assets/Loading.json";
import Lottie from "lottie-react";
import Error from "../assets/Error.json";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Lottie animationData={Error} style={{ width: "300px", height: "300px" }} />
      <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;