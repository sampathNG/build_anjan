import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
export const Homes = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Aboutus />
      <Contact />
    </>
  );
};
