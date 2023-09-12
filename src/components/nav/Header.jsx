import React, { useState } from "react";

import Nav from "../../screens/Home/Nav";
import NavMobile from "../../screens/Home/NavMobile";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header
        className="mb-12 lg:mb-0 px-4 z-20 bg-red py-8"
        data-aos="fade-down"
        data-aos-delay="1200"
        data-aos-duration="1000"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-[720px] lg:gap-x-[520px]">
              <a href="#">
                <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Tenacious
                </p>
              </a>
              <div className="hidden lg:flex ">
                <Nav path={""} />
              </div>
            </div>
            <div
              className={`${
                navOpen ? "max-h-52" : "max-h-0"
              } lg:hidden absolute top-20 bg-lime-50 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
            >
              <NavMobile onClick={() => setNavOpen(false)} />
            </div>
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setNavOpen(!navOpen)}
            >
              <i class="fas fa-bars-staggered text-2xl animate-bounce "></i>
            </div>
          </div>
        </div>
      </header>
      {/* <Outlet /> */}
    </>
  );
}

export default Header;
