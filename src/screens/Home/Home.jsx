import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero";
import Services from "../Services/Services";
import Work from "../Work/Work";
import About from "../About/About";
import Contact from "../Contact/Contactus";

const Home = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
