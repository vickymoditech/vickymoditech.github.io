import React from "react";
import "../App.css";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
