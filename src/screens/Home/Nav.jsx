import React from "react";
import { navigationData } from "./data";
// import { NavLink } from "react-router-dom";

const Nav = ({ ishome, path }) => {
  return (
    <nav>
      <ul className="flex gap-x-12 ">
        {navigationData.map((item, index) => {
          return (
            <li
              key={index}
              className={
                ishome
                  ? "text-white mt-5 font-bold px-5 py-3 hover:text-cyan-900 hover:bg-white hover:rounded-xl"
                  : path[1].includes(item.route)
                  ? "text-cyan-950 mt-5 font-bold bg-cyan-50 rounded-xl px-8 py-3 hover:text-cyan-950"
                  : "text-sky-500 mt-5 px-5 py-3 hover:text-cyan-950 hover:bg-cyan-50 hover:rounded-xl"
              }
            >
              <a href="#">{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
