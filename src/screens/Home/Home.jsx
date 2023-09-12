import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero";

const Home = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className="hidden-overflow">
      <Hero />
    </div>
  );
};

export default Home;
