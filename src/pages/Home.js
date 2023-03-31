import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Notification from "../components/Notification";
import "firebase/compat/auth";

const Home = () => {
  return (
    <>
      <Navigation />
      <Notification />
      <Banner />
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default Home;
