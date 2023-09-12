import React from "react";
import { ServicesList } from "../../utils/Dummy";
import bannner from "../../assets/img/con.png";

const ServicesLists = ({ selected }) => {
  const selectedIcon = (name) => {
    console.log("name", name);
    if (name === "web") {
      return (
        <i className="fas fa-laptop-code animate-bounce text-4xl text-cyan-700"></i>
      );
    }
    if (name === "mobile") {
      return (
        <i className="fas fa-mobile text-4xl animate-bounce text-cyan-700"></i>
      );
    }
    if (name === "graphic") {
      return (
        <i className="fas fa-gem text-3xl animate-bounce text-cyan-700"></i>
      );
    }
    if (name === "ui") {
      return (
        <i className="fas fa-pen-ruler animate-bounce text-3xl text-cyan-700"></i>
      );
    }
    if (name === "crm") {
      return (
        <i class="fas fa-users-rectangle animate-bounce text-3xl text-cyan-700"></i>
      );
    }
    if (name === "social") {
      return (
        <i class="fas fa-hashtag text-3xl animate-bounce text-cyan-700"></i>
      );
    }
    if (name === "content") {
      return (
        <i class="fas fa-quote-right text-3xl animate-bounce text-cyan-700"></i>
      );
    }
    if (name === "video") {
      return (
        <i class="fas fa-photo-film text-3xl animate-bounce text-cyan-700"></i>
      );
    }
    if (name === "copy") {
      return (
        <i class="fas fa-pen-nib text-3xl animate-bounce text-cyan-700"></i>
      );
    }
    if (name === "animation") {
      return (
        <i class="fas fa-wand-magic-sparkles text-3xl animate-bounce text-cyan-700"></i>
      );
    }
  };
  return (
    <section
      class="mx-auto py-[10px] grid lg:grid-cols-3 sm:grid-cols-1 gap-1 "
      data-aos="fade-left"
      data-aos-delay="800"
    >
      {ServicesList[selected].map((item, index) => (
        <div
          className="group bg-slate-50 rounded-xl p-6 text-center my-3 shadow-lg hover:bg-indigo-50 mx-4 transition delay-150 duration-300 ease-in-out"
          key={index}
        >
          {selectedIcon(item.slug)}
          <h3 className="font-bold text-cyan-900 text-2xl py-5">{item.name}</h3>
          <p className="text-slate-600">{item.discription}</p>
          <button className="mt-8 text-cyan-800 font-extrabold">
            View More
          </button>
        </div>
      ))}
    </section>
  );
};

export default ServicesLists;
