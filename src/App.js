import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about";
import Projects from "./components/projects";
import ProjectDetail from "./components/projectDetail";
import Home from "./components";
import Videos from "./components/videos";
import "./App.css";
import Resume from "./components/resume";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/header";
import Footer from "./components/footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="site-shell">
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projectDetail/:id" element={<ProjectDetail />} />
              <Route path="videos" element={<Videos />} />
            </Route>
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
