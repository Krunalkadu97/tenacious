import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/nav/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { About, Contactus, Services, Work } from "../screens";
import Home from "../screens/Home/Home";

function Navigation() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route element={<Header />}>
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus />} />
      </Route>
    </Routes>
  );
}

export default Navigation;
