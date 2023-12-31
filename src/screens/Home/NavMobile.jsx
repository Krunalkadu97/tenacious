import React from "react";
import { navigationData } from "./data";

const NavMobile = ({ onClick }) => {
  return (
    <ul className="flex flex-col px-10 py-6 gap-y-4 ">
      <button onClick={onClick}>
        <i className="fas fa-xmark text-2xl text-lime-600 absolute right-8 top-2"></i>
      </button>
      {navigationData.map((item, index) => (
        <li key={index} className="hover:text-lime-600">
          <a href="#">{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavMobile;
