import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Projects from "./components/projects";
import ProjectDetail from "./components/projectDetail";
import Home from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Route>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
