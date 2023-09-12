import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Nav from "../../screens/Home/Nav";
import NavMobile from "../../screens/Home/NavMobile";
const Item = ({ title, active }) => {
  return (
    <NavLink
      to={`/${title.toLowerCase()}`}
      className={
        active
          ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-lime-500 md:p-0 dark:text-white md:dark:text-blue-500"
          : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }
    >
      {title}
    </NavLink>
  );
};
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();
  let path = pathname.split("/");

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
              <NavLink to={"/"}>
                <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Tenacious
                </p>
              </NavLink>
              <div className="hidden lg:flex ">
                <Nav path={path} />
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
      <Outlet />
    </>
  );
}

export default Header;
