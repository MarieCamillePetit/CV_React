import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectList from "../components/Portfolio/ProjectList";
import Contact from "../components/Contact";

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <div className="portfolio">
        <ProjectList />
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
