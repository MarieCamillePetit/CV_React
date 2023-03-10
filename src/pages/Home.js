import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import AddProject from "../components/Portfolio/AddProject";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default Home;
