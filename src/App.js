import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Projects from "./components/projects";
import ProjectDetail from "./components/projectDetail";
import Home from "./components";
import "./App.css";
import Resume from "./components/resume";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="/resume" element={<Resume />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
