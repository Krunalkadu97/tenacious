import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();
  let path = pathname.split("/");
  return (
    <header
      className="mb-12 lg:mb-0 z-20 relative px-4"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-[720px] lg:gap-x-[520px]">
            <NavLink to={"/"}>
              <p className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tenacious
              </p>
            </NavLink>
            <div className="hidden lg:flex ">
              <Nav ishome={true} path={path} />
            </div>
          </div>
          <div
            className={`${
              navOpen ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-20 bg-white w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile onClick={() => setNavOpen(false)} ishome={true} />
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          >
            <i class="fas fa-bars-staggered text-2xl animate-bounce text-white"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
