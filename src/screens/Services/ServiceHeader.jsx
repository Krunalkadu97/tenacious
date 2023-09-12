import React from "react";
import { servicesData } from "./data";

const TabBtn = ({ title, active, onClick }) => {
  return (
    <button
      className={
        active
          ? "bg-cyan-50 text-cyan-900  px-8 py-3 rounded font-bold"
          : "text-gray-600"
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};
const ServiceHeader = ({ selected, setSelected }) => {
  const { title, title2, subtitle } = servicesData;
  return (
    <section className="px-5 md:py-[40px] sm:flex-row overflow-hidden">
      <div
        className="md:py-[80] sm:flex-row text-center content-center mx-auto gap-y-2 justify-center items-center "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h1 className="text-4xl text-center font-bold animate-pulse">
          {title}
        </h1>
        <p className="max-w-[100%] lg:max-w-[60%] mx-auto py-4 text-xl sm:text-base my-2  lg:font-medium">
          {subtitle}
        </p>
      </div>

      <div
        className="flex w-[100%] gap-x-5 py-8"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <TabBtn
          title={"Technology"}
          onClick={() => {
            setSelected("technology");
          }}
          active={selected === "technology"}
        />
        <TabBtn
          title={"Digital Marketing"}
          onClick={() => {
            setSelected("digital_marketing");
          }}
          active={selected === "digital_marketing"}
        />
        <TabBtn
          title={"Content Marketing"}
          onClick={() => {
            setSelected("contect_marketing");
          }}
          active={selected === "contect_marketing"}
        />
      </div>
      <div className="" data-aos="fade-right" data-aos-delay="600">
        <p className="text-cyan-700 font-bold sm:text-xl lg:text-2xl pb-4 sm:pt-8 sm:mt-5">
          {title2}
        </p>
        <p className="lg:max-w-[50%] sm:max-w-[70%] font-bold text-xl sm:font-normal px-0">
          {servicesData[selected]}
        </p>
      </div>
    </section>
  );
};

export default ServiceHeader;
