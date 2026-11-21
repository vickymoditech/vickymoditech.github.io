import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about";
import Projects from "./components/projects";
import ProjectDetail from "./components/projectDetail";
import Home from "./components";
import Videos from "./components/videos";
import Resume from "./components/resume";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/header";
import Footer from "./components/footer";
import LayoutPlayground from "./components/LayoutPlayground";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SiteContent() {
  const { pathname } = useLocation();

  return (
    <div className={pathname === "/resume" ? "site-shell" : "site-shell site-shell--playground"}>
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
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutPlayground />
      <SiteContent />
    </Router>
  );
}

export default App;
